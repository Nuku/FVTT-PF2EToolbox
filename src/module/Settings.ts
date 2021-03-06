/* Copyright 2020 Andrew Cuccinello
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { MODULE_NAME } from './Constants';
import '../external/settings-extender.js';

export enum DisplaySetting {
    'Always' = 50,
    'Owner' = 40,
    'Hover' = 30,
    'Owner Hover' = 20,
    'Control' = 10,
    'None' = 0,
}

export enum DispositionSetting {
    'Hostile' = -1,
    'Neutral' = 0,
    'Friendly' = 1,
}

export default class Settings {
    public static readonly KEY_MAX_HERO_POINTS = 'MAX_HERO_POINTS';

    public static readonly ENABLED_FEATURES = {
        QUANTITIES: 'ENABLE_QUANTITIES',
        QUICK_VIEW_SCENE: 'ENABLE_QUICK_VIEW_SCENE',
        QUICK_MYSTIFY: 'ENABLE_QUICK_MYSTIFY',
        NPC_SCALER: 'ENABLE_NPC_SCALER',
        TOKEN_SETUP: 'ENABLE_TOKEN_SETUP',
        ROLL_APP: 'ENABLE_ROLL_APP',
        HERO_POINTS: 'ENABLE_HERO_POINTS',
    };

    public static readonly KEY_SHIFT_QUANTITY = 'QUANTITY_SHIFT_MULTIPLIER';
    public static readonly KEY_CONTROL_QUANTITY = 'QUANTITY_CONTROL_MULTIPLIER';

    public static readonly KEY_PARTY_FOLDER = 'PARTY_FOLDER_NAME';
    public static readonly KEY_ENEMY_FOLDER = 'ENEMY_FOLDER_NAME';
    public static readonly KEY_SCALED_FOLDER = 'SCALED_FOLDER_NAME';

    public static readonly KEY_TOKEN_PATH = 'TOKEN_FOLDER_PATH';
    public static readonly KEY_TOKEN_TARGET = 'TOKEN_FOLDER_TARGET';
    public static readonly KEY_TOKEN_TARGET_BUCKET = 'TOKEN_FOLDER_TARGET_BUCKET';

    // public static readonly KEY_SETTINGS = 'MODULE_SETTINGS';

    public static get<T = any>(key: string): T {
        return game.settings.get(MODULE_NAME, key) as T;
    }

    public static async set(key: string, value: any) {
        return game.settings.set(MODULE_NAME, key, value);
    }

    public static reg(key: string, value: any) {
        game.settings.register(MODULE_NAME, key, value);
    }

    public static registerAllSettings() {
        const types = window['Azzu'].SettingsTypes;

        Settings.reg(Settings.ENABLED_FEATURES.HERO_POINTS, {
            name: 'Enable Hero Points',
            hint: 'Setting only applied on page reload.',
            scope: 'world',
            type: Boolean,
            default: true,
            config: true,
            restricted: true,
        });

        Settings.reg(Settings.ENABLED_FEATURES.QUANTITIES, {
            name: 'Enable Quick Quantities',
            hint: 'Setting only applied on page reload.',
            scope: 'world',
            type: Boolean,
            default: true,
            config: true,
            restricted: true,
        });

        Settings.reg(Settings.ENABLED_FEATURES.QUICK_VIEW_SCENE, {
            name: 'Enable Quick View Scene',
            hint: 'Setting only applied on page reload.',
            scope: 'world',
            type: Boolean,
            default: true,
            config: true,
            restricted: true,
        });

        Settings.reg(Settings.ENABLED_FEATURES.QUICK_MYSTIFY, {
            name: 'Enable Quick Mystify',
            hint: 'Setting only applied on page reload.',
            scope: 'world',
            type: Boolean,
            default: true,
            config: true,
            restricted: true,
        });

        Settings.reg(Settings.ENABLED_FEATURES.ROLL_APP, {
            name: 'Enable Roll App',
            hint: 'Setting only applied on page reload.',
            scope: 'world',
            type: Boolean,
            default: true,
            config: true,
            restricted: true,
        });

        Settings.reg(Settings.ENABLED_FEATURES.NPC_SCALER, {
            name: 'Enable NPC Scaler',
            hint: 'Setting only applied on page reload.',
            scope: 'world',
            type: Boolean,
            default: true,
            config: true,
            restricted: true,
        });

        Settings.reg(Settings.ENABLED_FEATURES.TOKEN_SETUP, {
            name: 'Enable Token Setup',
            hint: 'Setting only applied on page reload.',
            scope: 'world',
            type: Boolean,
            default: true,
            config: true,
            restricted: true,
        });

        Settings.reg(Settings.KEY_MAX_HERO_POINTS, {
            name: 'Maximum Hero Points',
            scope: 'world',
            type: Number,
            default: 3,
            config: true,
            restricted: true,
        });

        Settings.reg(Settings.KEY_SHIFT_QUANTITY, {
            name: 'Shift Quantity Multiplier',
            scope: 'world',
            type: Number,
            default: 5,
            config: true,
            restricted: true,
        });
        Settings.reg(Settings.KEY_CONTROL_QUANTITY, {
            name: 'Control Quantity Multiplier',
            scope: 'world',
            type: Number,
            default: 10,
            config: true,
            restricted: true,
        });

        Settings.reg(Settings.KEY_SCALED_FOLDER, {
            name: 'Scaled NPC Folder',
            scope: 'world',
            type: String,
            default: '',
            config: true,
            restricted: true,
        });

        // Settings.reg(Settings.KEY_PARTY_FOLDER, {
        //     name: 'Party Folder Name',
        //     scope: 'world',
        //     type: String,
        //     default: '',
        //     config: true,
        //     restricted: true,
        // });
        Settings.reg(Settings.KEY_ENEMY_FOLDER, {
            name: 'Enemy Folder Name',
            scope: 'world',
            type: String,
            default: '',
            config: true,
            restricted: true,
        });

        Settings.reg(Settings.KEY_TOKEN_TARGET, {
            name: 'Token Folder Target',
            hint: 'Either "data" or "s3".',
            scope: 'world',
            type: String,
            default: 'data',
            config: false,
            restricted: true,
        });
        Settings.reg(Settings.KEY_TOKEN_TARGET_BUCKET, {
            name: 'S3 Bucket',
            hint: 'Only needed when Token Folder Target is "s3".',
            scope: 'world',
            type: String,
            default: 'data',
            config: false,
            restricted: true,
        });

        Settings.reg(Settings.KEY_TOKEN_PATH, {
            name: 'True Token Folder Path',
            scope: 'world',
            type: String,
            default: '',
            config: false,
            restricted: true,
        });

        Settings.reg(`${Settings.KEY_TOKEN_PATH}_CLIENT_FACING`, {
            name: 'Token Folder Path',
            hint:
                'Select any file in the target directory. Note S3 buckets do not work with wildcard ?s due ' +
                'to limitations of Foundry, and will use Image_01.png instead.',
            scope: 'world',
            type: types.FilePickerImage,
            default: '',
            config: true,
            restricted: true,
            onChange: (value: string) => {
                const parts = value.split('/');
                parts.pop();

                value = parts.join('/');
                // @ts-ignore
                const parsedS3URL = FilePicker.parseS3URL(value);

                if (parsedS3URL.bucket !== null) {
                    Settings.set(Settings.KEY_TOKEN_TARGET_BUCKET, parsedS3URL.bucket);
                    Settings.set(Settings.KEY_TOKEN_TARGET, 's3');
                    Settings.set(Settings.KEY_TOKEN_PATH, value);
                } else {
                    Settings.set(Settings.KEY_TOKEN_TARGET, 'data');
                    Settings.set(Settings.KEY_TOKEN_PATH, value);
                }
            },
        });
    }
}
