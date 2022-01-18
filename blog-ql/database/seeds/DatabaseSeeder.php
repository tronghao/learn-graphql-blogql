<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Topic;
use App\Post;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        factory(User::class, 20)->create();
        factory(Topic::class, 20)->create();
        factory(Post::class, 20)->create();
    }
}
