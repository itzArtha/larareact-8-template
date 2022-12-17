<?php

namespace Database\Seeders;

use App\Models\Unhcr;
use Illuminate\Database\Seeder;

class UnhcrSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = file_get_contents(storage_path('app/unhcr.json'));

        foreach (json_decode($data, true) as $unhcr) {
            if (! blank($unhcr['unhcr_number'])) {
                Unhcr::create([
                    'unhcr_number' => $unhcr['unhcr_number'],
                ]);
            }
        }
    }
}
