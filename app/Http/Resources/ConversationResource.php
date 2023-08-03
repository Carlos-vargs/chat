<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class ConversationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user' => UserResource::make(User::findOrFail(
                $this->participants->where("user_id", "!=", Auth::id())->pluck("user_id")->first()
            )),
            'messages' => MessageResource::collection($this->messages),
        ];
    }
}
