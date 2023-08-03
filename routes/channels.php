<?php

use App\Models\Conversation;
use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('chatsam', function (User $user) {
    return $user->id;
});

Broadcast::channel('conversation.{conversation}', function ($user, Conversation $conversation) {
    $isParticipant = $conversation->participants()->where('user_id', $user->id)->exists();
    return $isParticipant;
});
