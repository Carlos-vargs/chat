<?php

namespace App\Http\Middleware;

use App\Http\Resources\ConversationResource;
use App\Http\Resources\GroupResource;
use App\Http\Resources\MessageResource;
use App\Http\Resources\UserResource;
use App\Models\Conversation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Inertia\Middleware;

use function PHPUnit\Framework\isNull;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {

        $conversation = Conversation::find(
            Cache::get('current:chat:' . Auth::id())
        );

        $isGroup = isset($conversation->name);

        return array_merge(parent::share($request), [

            'auth' => fn () => $request->user()
                ? $request->user()
                : null,

            'groups' => Conversation::query()->where('name', "!=",  null)
                ->whereHas('participants', function ($query) {
                    $query->where('user_id', Auth::id());
                })->get()->toArray(),


            'favourites' => User::query()
                ->where('id', '!=', Auth::id())
                ->get()->toArray(),

            'contacts' => UserResource::collection(User::query()
                ->where('id', '!=', Auth::id())
                ->get()),

            'conversation' => fn () => (Cache::get('current:chat:' . Auth::id()) && !$isGroup)
                ? ConversationResource::make($conversation)
                : null,

            'group' => fn () => ((Cache::get('current:chat:' . Auth::id()) && $isGroup))
                ? GroupResource::make($conversation)
                : null

        ]);
    }
}
