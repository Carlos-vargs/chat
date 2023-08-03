<?php

namespace App\Http\Controllers;

use App\Events\Chatsam;
use App\Events\MessageSent;
use App\Models\Conversation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Chatsam::dispatch();
        return Inertia::render('Home');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $userId = Auth::id();
        $conversationId = $request->input('conversationId');
        $content = $request->input('message');

        $message = Conversation::query()
            ->findOrFail($conversationId)
            ->messages()
            ->create([
                'user_id' => $userId,
                'content' => $content,
            ]);

        Cache::put('current:chat:' . Auth::id(), $conversationId, now()->addMinutes(60));

        broadcast(new MessageSent($message))->toOthers();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $id = $request->input('id');
        $isGroup = $request->input('group');
        $conversation = null;

        if ($isGroup) {
            $conversation = Conversation::findOrFail($id);
        } else {
            $conversation = Conversation::where('name', null)
                ->whereHas('participants', function ($query) use ($id) {
                    return $query->where('user_id', $id);
                })
                ->whereHas('participants', function ($query) {
                    return $query->where('user_id', Auth::id());
                })->first();
        }

        if (!$conversation) {
            $conversation = Auth::user()
                ->conversations()
                ->create();

            $conversation->participants()->createMany([
                ['user_id' => $id],
            ]);
        }

        Cache::put('current:chat:' . Auth::id(), $conversation->id, now()->addMinutes(60));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
