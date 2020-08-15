export enum NPCAttribute {
    Attack = 'attack',
    SpellAttack = 'spellAttack',

    StrikeDamage = 'damage',
    AreaDamage = 'areaDamage',
    AreaDamageLimited = 'areaDamageLimit',

    DifficultyClass = 'dc',

    HitPoints = 'hp',
    ArmorClass = 'ac',

    SavingThrow = 'savingThrow',
    Perception = 'perception',
    Skill = 'skill',
    Resistance = 'resistance',
    Weakness = 'weakness',
}

interface MinMaxValue<T extends string | number> {
    minimum: T;
    maximum: T;
}

interface MHE<T extends string | number> {
    moderate: T;
    high: T;
    extreme: T;
}
interface LMH<T extends string | number> {
    low: T;
    moderate: T;
    high: T;
}
interface LMHE<T extends string | number> {
    low: T;
    moderate: T;
    high: T;
    extreme: T;
}
interface LMHET<T extends string | number> {
    low: T;
    moderate: T;
    high: T;
    extreme: T;
    terrible: T;
}

export const ROLL_APP_DATA = {
    hitPoints: [
        { level: -1, high: '9-10', moderate: '8-7', low: '6-5' },
        { level: 0, high: '20-17', moderate: '16-14', low: '13-11' },
        { level: 1, high: '26-24', moderate: '21-19', low: '16-14' },
        { level: 2, high: '40-36', moderate: '32-28', low: '25-21' },
        { level: 3, high: '59-53', moderate: '48-42', low: '37-31' },
        { level: 4, high: '78-72', moderate: '63-57', low: '48-42' },
        { level: 5, high: '97-91', moderate: '78-72', low: '59-53' },
        { level: 6, high: '123-115', moderate: '99-91', low: '75-67' },
        { level: 7, high: '148-140', moderate: '119-111', low: '90-82' },
        { level: 8, high: '173-165', moderate: '139-131', low: '105-97' },
        { level: 9, high: '198-190', moderate: '159-151', low: '120-112' },
        { level: 10, high: '223-215', moderate: '179-171', low: '135-127' },
        { level: 11, high: '248-240', moderate: '199-191', low: '150-142' },
        { level: 12, high: '273-265', moderate: '219-211', low: '165-157' },
        { level: 13, high: '298-290', moderate: '239-231', low: '180-172' },
        { level: 14, high: '323-315', moderate: '259-251', low: '195-187' },
        { level: 15, high: '348-340', moderate: '279-271', low: '210-202' },
        { level: 16, high: '373-365', moderate: '299-291', low: '225-217' },
        { level: 17, high: '398-390', moderate: '319-311', low: '240-232' },
        { level: 18, high: '423-415', moderate: '339-331', low: '255-247' },
        { level: 19, high: '448-440', moderate: '359-351', low: '270-262' },
        { level: 20, high: '473-465', moderate: '379-371', low: '285-277' },
        { level: 21, high: '505-495', moderate: '405-395', low: '305-295' },
        { level: 22, high: '544-532', moderate: '436-424', low: '329-317' },
        { level: 23, high: '581-569', moderate: '466-454', low: '351-339' },
        { level: 24, high: '633-617', moderate: '508-492', low: '383-367' },
    ],
    abilityScore: [
        { level: -1, extreme: 3, high: 3, moderate: 2, low: 0, terrible: -4, abysmal: -5 },
        { level: 0, extreme: 3, high: 3, moderate: 2, low: 0, terrible: -4, abysmal: -5 },
        { level: 1, extreme: 5, high: 4, moderate: 3, low: 1, terrible: -4, abysmal: -5 },
        { level: 2, extreme: 5, high: 4, moderate: 3, low: 1, terrible: -4, abysmal: -5 },
        { level: 3, extreme: 5, high: 4, moderate: 3, low: 1, terrible: -4, abysmal: -5 },
        { level: 4, extreme: 6, high: 5, moderate: 3, low: 2, terrible: -4, abysmal: -5 },
        { level: 5, extreme: 6, high: 5, moderate: 4, low: 2, terrible: -4, abysmal: -5 },
        { level: 6, extreme: 7, high: 5, moderate: 4, low: 2, terrible: -4, abysmal: -5 },
        { level: 7, extreme: 7, high: 6, moderate: 4, low: 2, terrible: -4, abysmal: -5 },
        { level: 8, extreme: 7, high: 6, moderate: 4, low: 3, terrible: -4, abysmal: -5 },
        { level: 9, extreme: 7, high: 6, moderate: 4, low: 3, terrible: -4, abysmal: -5 },
        { level: 10, extreme: 8, high: 7, moderate: 5, low: 3, terrible: -4, abysmal: -5 },
        { level: 11, extreme: 8, high: 7, moderate: 5, low: 3, terrible: -4, abysmal: -5 },
        { level: 12, extreme: 8, high: 7, moderate: 5, low: 4, terrible: -4, abysmal: -5 },
        { level: 13, extreme: 9, high: 8, moderate: 5, low: 4, terrible: -4, abysmal: -5 },
        { level: 14, extreme: 9, high: 8, moderate: 5, low: 4, terrible: -4, abysmal: -5 },
        { level: 15, extreme: 9, high: 8, moderate: 6, low: 4, terrible: -4, abysmal: -5 },
        { level: 16, extreme: 10, high: 9, moderate: 6, low: 5, terrible: -4, abysmal: -5 },
        { level: 17, extreme: 10, high: 9, moderate: 6, low: 5, terrible: -4, abysmal: -5 },
        { level: 18, extreme: 10, high: 9, moderate: 6, low: 5, terrible: -4, abysmal: -5 },
        { level: 19, extreme: 11, high: 10, moderate: 6, low: 5, terrible: -4, abysmal: -5 },
        { level: 20, extreme: 11, high: 10, moderate: 7, low: 6, terrible: -4, abysmal: -5 },
        { level: 21, extreme: 11, high: 10, moderate: 7, low: 6, terrible: -4, abysmal: -5 },
        { level: 22, extreme: 11, high: 10, moderate: 8, low: 6, terrible: -4, abysmal: -5 },
        { level: 23, extreme: 11, high: 10, moderate: 8, low: 6, terrible: -4, abysmal: -5 },
        { level: 24, extreme: 13, high: 12, moderate: 9, low: 7, terrible: -4, abysmal: -5 },
    ],
    savingThrow: [
        { level: -1, extreme: 9, high: 8, moderate: 5, low: 2, terrible: 0 },
        { level: 0, extreme: 10, high: 9, moderate: 6, low: 3, terrible: 1 },
        { level: 1, extreme: 11, high: 10, moderate: 7, low: 4, terrible: 2 },
        { level: 2, extreme: 12, high: 11, moderate: 8, low: 5, terrible: 3 },
        { level: 3, extreme: 14, high: 12, moderate: 9, low: 6, terrible: 4 },
        { level: 4, extreme: 15, high: 14, moderate: 11, low: 8, terrible: 6 },
        { level: 5, extreme: 17, high: 15, moderate: 12, low: 9, terrible: 7 },
        { level: 6, extreme: 18, high: 17, moderate: 14, low: 11, terrible: 8 },
        { level: 7, extreme: 20, high: 18, moderate: 15, low: 12, terrible: 10 },
        { level: 8, extreme: 21, high: 19, moderate: 16, low: 13, terrible: 11 },
        { level: 9, extreme: 23, high: 21, moderate: 18, low: 15, terrible: 12 },
        { level: 10, extreme: 24, high: 22, moderate: 19, low: 16, terrible: 14 },
        { level: 11, extreme: 26, high: 24, moderate: 21, low: 18, terrible: 15 },
        { level: 12, extreme: 27, high: 25, moderate: 22, low: 19, terrible: 16 },
        { level: 13, extreme: 29, high: 26, moderate: 23, low: 20, terrible: 18 },
        { level: 14, extreme: 30, high: 28, moderate: 25, low: 22, terrible: 19 },
        { level: 15, extreme: 32, high: 29, moderate: 26, low: 23, terrible: 20 },
        { level: 16, extreme: 33, high: 30, moderate: 28, low: 25, terrible: 22 },
        { level: 17, extreme: 35, high: 32, moderate: 29, low: 26, terrible: 23 },
        { level: 18, extreme: 36, high: 33, moderate: 30, low: 27, terrible: 24 },
        { level: 19, extreme: 38, high: 35, moderate: 32, low: 29, terrible: 26 },
        { level: 20, extreme: 39, high: 36, moderate: 33, low: 30, terrible: 27 },
        { level: 21, extreme: 41, high: 38, moderate: 35, low: 32, terrible: 28 },
        { level: 22, extreme: 43, high: 39, moderate: 36, low: 33, terrible: 30 },
        { level: 23, extreme: 44, high: 40, moderate: 37, low: 34, terrible: 31 },
        { level: 24, extreme: 46, high: 42, moderate: 38, low: 36, terrible: 32 },
    ],
    armorClass: [
        { level: -1, extreme: 18, high: 15, moderate: 14, low: 12 },
        { level: 0, extreme: 19, high: 16, moderate: 15, low: 13 },
        { level: 1, extreme: 19, high: 16, moderate: 15, low: 13 },
        { level: 2, extreme: 21, high: 18, moderate: 17, low: 15 },
        { level: 3, extreme: 22, high: 19, moderate: 18, low: 16 },
        { level: 4, extreme: 24, high: 21, moderate: 20, low: 18 },
        { level: 5, extreme: 25, high: 22, moderate: 21, low: 19 },
        { level: 6, extreme: 27, high: 24, moderate: 23, low: 21 },
        { level: 7, extreme: 28, high: 25, moderate: 24, low: 22 },
        { level: 8, extreme: 30, high: 27, moderate: 26, low: 24 },
        { level: 9, extreme: 31, high: 28, moderate: 27, low: 25 },
        { level: 10, extreme: 33, high: 30, moderate: 29, low: 27 },
        { level: 11, extreme: 34, high: 31, moderate: 30, low: 28 },
        { level: 12, extreme: 36, high: 33, moderate: 32, low: 30 },
        { level: 13, extreme: 37, high: 34, moderate: 33, low: 31 },
        { level: 14, extreme: 39, high: 36, moderate: 35, low: 33 },
        { level: 15, extreme: 40, high: 37, moderate: 36, low: 34 },
        { level: 16, extreme: 42, high: 39, moderate: 38, low: 36 },
        { level: 17, extreme: 43, high: 40, moderate: 39, low: 37 },
        { level: 18, extreme: 45, high: 42, moderate: 41, low: 39 },
        { level: 19, extreme: 46, high: 43, moderate: 42, low: 40 },
        { level: 20, extreme: 48, high: 45, moderate: 44, low: 42 },
        { level: 21, extreme: 49, high: 46, moderate: 45, low: 43 },
        { level: 22, extreme: 51, high: 48, moderate: 47, low: 45 },
        { level: 23, extreme: 52, high: 49, moderate: 48, low: 46 },
        { level: 24, extreme: 54, high: 51, moderate: 50, low: 48 },
    ],
    perception: [
        { level: -1, extreme: 9, high: 8, moderate: 5, low: 2, terrible: 0 },
        { level: 0, extreme: 10, high: 9, moderate: 6, low: 3, terrible: 1 },
        { level: 1, extreme: 11, high: 10, moderate: 7, low: 4, terrible: 2 },
        { level: 2, extreme: 12, high: 11, moderate: 8, low: 5, terrible: 3 },
        { level: 3, extreme: 14, high: 12, moderate: 9, low: 6, terrible: 4 },
        { level: 4, extreme: 15, high: 14, moderate: 11, low: 8, terrible: 6 },
        { level: 5, extreme: 17, high: 15, moderate: 12, low: 9, terrible: 7 },
        { level: 6, extreme: 18, high: 17, moderate: 14, low: 11, terrible: 8 },
        { level: 7, extreme: 20, high: 18, moderate: 15, low: 12, terrible: 10 },
        { level: 8, extreme: 21, high: 19, moderate: 16, low: 13, terrible: 11 },
        { level: 9, extreme: 23, high: 21, moderate: 18, low: 15, terrible: 12 },
        { level: 10, extreme: 24, high: 22, moderate: 19, low: 16, terrible: 14 },
        { level: 11, extreme: 26, high: 24, moderate: 21, low: 18, terrible: 15 },
        { level: 12, extreme: 27, high: 25, moderate: 22, low: 19, terrible: 16 },
        { level: 13, extreme: 29, high: 26, moderate: 23, low: 20, terrible: 18 },
        { level: 14, extreme: 30, high: 28, moderate: 25, low: 22, terrible: 19 },
        { level: 15, extreme: 32, high: 29, moderate: 26, low: 23, terrible: 20 },
        { level: 16, extreme: 33, high: 30, moderate: 28, low: 25, terrible: 22 },
        { level: 17, extreme: 35, high: 32, moderate: 29, low: 26, terrible: 23 },
        { level: 18, extreme: 36, high: 33, moderate: 30, low: 27, terrible: 24 },
        { level: 19, extreme: 38, high: 35, moderate: 32, low: 29, terrible: 26 },
        { level: 20, extreme: 39, high: 36, moderate: 33, low: 30, terrible: 27 },
        { level: 21, extreme: 41, high: 38, moderate: 35, low: 32, terrible: 28 },
        { level: 22, extreme: 43, high: 39, moderate: 36, low: 33, terrible: 30 },
        { level: 23, extreme: 44, high: 40, moderate: 37, low: 34, terrible: 31 },
        { level: 24, extreme: 46, high: 42, moderate: 38, low: 36, terrible: 32 },
    ],
    skill: [
        { level: -1, extreme: 8, high: 5, moderate: 4, low: 2, terrible: 1 },
        { level: 0, extreme: 9, high: 6, moderate: 5, low: 3, terrible: 2 },
        { level: 1, extreme: 10, high: 7, moderate: 6, low: 4, terrible: 3 },
        { level: 2, extreme: 11, high: 8, moderate: 7, low: 5, terrible: 4 },
        { level: 3, extreme: 13, high: 10, moderate: 9, low: 7, terrible: 5 },
        { level: 4, extreme: 15, high: 12, moderate: 10, low: 8, terrible: 7 },
        { level: 5, extreme: 16, high: 13, moderate: 12, low: 10, terrible: 8 },
        { level: 6, extreme: 18, high: 15, moderate: 13, low: 11, terrible: 9 },
        { level: 7, extreme: 20, high: 17, moderate: 15, low: 13, terrible: 11 },
        { level: 8, extreme: 21, high: 18, moderate: 16, low: 14, terrible: 12 },
        { level: 9, extreme: 23, high: 20, moderate: 18, low: 16, terrible: 13 },
        { level: 10, extreme: 25, high: 22, moderate: 19, low: 17, terrible: 15 },
        { level: 11, extreme: 26, high: 23, moderate: 21, low: 19, terrible: 16 },
        { level: 12, extreme: 28, high: 25, moderate: 22, low: 20, terrible: 17 },
        { level: 13, extreme: 30, high: 27, moderate: 24, low: 22, terrible: 19 },
        { level: 14, extreme: 31, high: 28, moderate: 25, low: 23, terrible: 20 },
        { level: 15, extreme: 33, high: 30, moderate: 27, low: 25, terrible: 21 },
        { level: 16, extreme: 35, high: 32, moderate: 28, low: 26, terrible: 23 },
        { level: 17, extreme: 36, high: 33, moderate: 30, low: 28, terrible: 24 },
        { level: 18, extreme: 38, high: 35, moderate: 31, low: 29, terrible: 25 },
        { level: 19, extreme: 40, high: 37, moderate: 33, low: 31, terrible: 27 },
        { level: 20, extreme: 41, high: 38, moderate: 34, low: 32, terrible: 28 },
        { level: 21, extreme: 43, high: 40, moderate: 36, low: 34, terrible: 29 },
        { level: 22, extreme: 45, high: 42, moderate: 37, low: 35, terrible: 31 },
        { level: 23, extreme: 46, high: 43, moderate: 38, low: 36, terrible: 32 },
        { level: 24, extreme: 48, high: 45, moderate: 40, low: 38, terrible: 33 },
    ],
    strikeAttack: [
        { level: -1, extreme: 10, high: 8, moderate: 6, low: 4 },
        { level: 0, extreme: 10, high: 8, moderate: 6, low: 4 },
        { level: 1, extreme: 11, high: 9, moderate: 7, low: 5 },
        { level: 2, extreme: 13, high: 11, moderate: 9, low: 7 },
        { level: 3, extreme: 14, high: 12, moderate: 10, low: 8 },
        { level: 4, extreme: 16, high: 14, moderate: 12, low: 9 },
        { level: 5, extreme: 17, high: 15, moderate: 13, low: 11 },
        { level: 6, extreme: 19, high: 17, moderate: 15, low: 12 },
        { level: 7, extreme: 20, high: 18, moderate: 16, low: 13 },
        { level: 8, extreme: 22, high: 20, moderate: 18, low: 15 },
        { level: 9, extreme: 23, high: 21, moderate: 19, low: 16 },
        { level: 10, extreme: 25, high: 23, moderate: 21, low: 17 },
        { level: 11, extreme: 27, high: 24, moderate: 22, low: 19 },
        { level: 12, extreme: 28, high: 26, moderate: 24, low: 20 },
        { level: 13, extreme: 29, high: 27, moderate: 25, low: 21 },
        { level: 14, extreme: 31, high: 29, moderate: 27, low: 23 },
        { level: 15, extreme: 32, high: 30, moderate: 28, low: 24 },
        { level: 16, extreme: 34, high: 32, moderate: 30, low: 25 },
        { level: 17, extreme: 35, high: 33, moderate: 31, low: 27 },
        { level: 18, extreme: 37, high: 35, moderate: 33, low: 28 },
        { level: 19, extreme: 38, high: 36, moderate: 34, low: 29 },
        { level: 20, extreme: 40, high: 38, moderate: 36, low: 31 },
        { level: 21, extreme: 41, high: 39, moderate: 37, low: 32 },
        { level: 22, extreme: 43, high: 41, moderate: 39, low: 33 },
        { level: 23, extreme: 44, high: 42, moderate: 40, low: 35 },
        { level: 24, extreme: 46, high: 44, moderate: 42, low: 36 },
    ],
    strikeDamage: [
        { level: -1, extreme: '1d6+1', high: '1d4+1', moderate: '1d4', low: '1d4' },
        { level: 0, extreme: '1d6+3', high: '1d6+2', moderate: '1d4+2', low: '1d4+1' },
        { level: 1, extreme: '1d8+4', high: '1d6+3', moderate: '1d6+2', low: '1d4+2' },
        { level: 2, extreme: '1d12+4', high: '1d10+4', moderate: '1d8+4', low: '1d6+3' },
        { level: 3, extreme: '1d12+8', high: '1d10+6', moderate: '1d8+6', low: '1d6+5' },
        { level: 4, extreme: '2d10+7', high: '2d8+5', moderate: '2d6+5', low: '2d4+4' },
        { level: 5, extreme: '2d12+7', high: '2d8+7', moderate: '2d6+6', low: '2d4+6' },
        { level: 6, extreme: '2d12+10', high: '2d8+9', moderate: '2d6+8', low: '2d4+7' },
        { level: 7, extreme: '2d12+12', high: '2d10+9', moderate: '2d8+8', low: '2d6+6' },
        { level: 8, extreme: '2d12+15', high: '2d10+11', moderate: '2d8+9', low: '2d6+8' },
        { level: 9, extreme: '2d12+17', high: '2d10+13', moderate: '2d8+11', low: '2d6+9' },
        { level: 10, extreme: '2d12+20', high: '2d12+13', moderate: '2d10+11', low: '2d6+10' },
        { level: 11, extreme: '2d12+22', high: '2d12+15', moderate: '2d10+12', low: '2d8+10' },
        { level: 12, extreme: '3d12+19', high: '3d10+14', moderate: '3d8+12', low: '3d6+10' },
        { level: 13, extreme: '3d12+21', high: '3d10+16', moderate: '3d8+14', low: '3d6+11' },
        { level: 14, extreme: '3d12+24', high: '3d10+18', moderate: '3d8+15', low: '3d6+13' },
        { level: 15, extreme: '3d12+26', high: '3d12+17', moderate: '3d10+14', low: '3d6+14' },
        { level: 16, extreme: '3d12+29', high: '3d12+18', moderate: '3d10+15', low: '3d6+15' },
        { level: 17, extreme: '3d12+31', high: '3d12+19', moderate: '3d10+16', low: '3d6+16' },
        { level: 18, extreme: '3d12+34', high: '3d12+20', moderate: '3d10+17', low: '3d6+17' },
        { level: 19, extreme: '4d12+29', high: '4d10+20', moderate: '4d8+17', low: '4d6+14' },
        { level: 20, extreme: '4d12+32', high: '4d10+22', moderate: '4d8+19', low: '4d6+15' },
        { level: 21, extreme: '4d12+34', high: '4d10+24', moderate: '4d8+20', low: '4d6+17' },
        { level: 22, extreme: '4d12+37', high: '4d10+26', moderate: '4d8+22', low: '4d6+18' },
        { level: 23, extreme: '4d12+39', high: '4d12+24', moderate: '4d10+20', low: '4d6+19' },
        { level: 24, extreme: '4d12+42', high: '4d12+26', moderate: '4d10+22', low: '4d6+21' },
    ],
    areaDamage: [
        { level: -1, unlimited: '1d4', limited: '1d6' },
        { level: 0, unlimited: '1d6', limited: '1d10' },
        { level: 1, unlimited: '2d4', limited: '2d6' },
        { level: 2, unlimited: '2d6', limited: '3d6' },
        { level: 3, unlimited: '2d8', limited: '4d6' },
        { level: 4, unlimited: '3d6', limited: '5d6' },
        { level: 5, unlimited: '2d10', limited: '6d6' },
        { level: 6, unlimited: '4d6', limited: '7d6' },
        { level: 7, unlimited: '4d6', limited: '8d6' },
        { level: 8, unlimited: '5d6', limited: '9d6' },
        { level: 9, unlimited: '5d6', limited: '10d6' },
        { level: 10, unlimited: '6d6', limited: '11d6' },
        { level: 11, unlimited: '6d6', limited: '12d6' },
        { level: 12, unlimited: '5d8', limited: '13d6' },
        { level: 13, unlimited: '7d6', limited: '14d6' },
        { level: 14, unlimited: '4d12', limited: '15d6' },
        { level: 15, unlimited: '8d6', limited: '16d6' },
        { level: 16, unlimited: '8d6', limited: '17d6' },
        { level: 17, unlimited: '8d6', limited: '18d6' },
        { level: 18, unlimited: '9d6', limited: '19d6' },
        { level: 19, unlimited: '9d6', limited: '20d6' },
        { level: 20, unlimited: '6d10', limited: '21d6' },
        { level: 21, unlimited: '10d6', limited: '22d6' },
        { level: 22, unlimited: '8d8', limited: '23d6' },
        { level: 23, unlimited: '11d6', limited: '24d6' },
        { level: 24, unlimited: '11d6', limited: '25d6' },
    ],
    difficultyClass: [
        { level: -1, extreme: 19, high: 16, moderate: 13 },
        { level: 0, extreme: 19, high: 16, moderate: 13 },
        { level: 1, extreme: 20, high: 17, moderate: 14 },
        { level: 2, extreme: 22, high: 18, moderate: 15 },
        { level: 3, extreme: 23, high: 20, moderate: 17 },
        { level: 4, extreme: 25, high: 21, moderate: 18 },
        { level: 5, extreme: 26, high: 22, moderate: 19 },
        { level: 6, extreme: 27, high: 24, moderate: 21 },
        { level: 7, extreme: 29, high: 25, moderate: 22 },
        { level: 8, extreme: 30, high: 26, moderate: 23 },
        { level: 9, extreme: 32, high: 28, moderate: 25 },
        { level: 10, extreme: 33, high: 29, moderate: 26 },
        { level: 11, extreme: 34, high: 30, moderate: 27 },
        { level: 12, extreme: 36, high: 32, moderate: 29 },
        { level: 13, extreme: 37, high: 33, moderate: 30 },
        { level: 14, extreme: 39, high: 34, moderate: 31 },
        { level: 15, extreme: 40, high: 36, moderate: 33 },
        { level: 16, extreme: 41, high: 37, moderate: 34 },
        { level: 17, extreme: 43, high: 38, moderate: 35 },
        { level: 18, extreme: 44, high: 40, moderate: 37 },
        { level: 19, extreme: 46, high: 41, moderate: 38 },
        { level: 20, extreme: 47, high: 42, moderate: 39 },
        { level: 21, extreme: 48, high: 44, moderate: 41 },
        { level: 22, extreme: 50, high: 45, moderate: 42 },
        { level: 23, extreme: 51, high: 46, moderate: 43 },
        { level: 24, extreme: 52, high: 48, moderate: 45 },
    ],
    spell: [
        { level: -1, extreme: 11, high: 8, moderate: 5 },
        { level: 0, extreme: 11, high: 8, moderate: 5 },
        { level: 1, extreme: 12, high: 9, moderate: 6 },
        { level: 2, extreme: 14, high: 10, moderate: 7 },
        { level: 3, extreme: 15, high: 12, moderate: 9 },
        { level: 4, extreme: 17, high: 13, moderate: 10 },
        { level: 5, extreme: 18, high: 14, moderate: 11 },
        { level: 6, extreme: 19, high: 16, moderate: 13 },
        { level: 7, extreme: 21, high: 17, moderate: 14 },
        { level: 8, extreme: 22, high: 18, moderate: 15 },
        { level: 9, extreme: 24, high: 20, moderate: 17 },
        { level: 10, extreme: 25, high: 21, moderate: 18 },
        { level: 11, extreme: 26, high: 22, moderate: 19 },
        { level: 12, extreme: 28, high: 24, moderate: 21 },
        { level: 13, extreme: 29, high: 25, moderate: 22 },
        { level: 14, extreme: 31, high: 26, moderate: 23 },
        { level: 15, extreme: 32, high: 28, moderate: 25 },
        { level: 16, extreme: 33, high: 29, moderate: 26 },
        { level: 17, extreme: 35, high: 30, moderate: 27 },
        { level: 18, extreme: 36, high: 32, moderate: 29 },
        { level: 19, extreme: 38, high: 33, moderate: 30 },
        { level: 20, extreme: 39, high: 34, moderate: 31 },
        { level: 21, extreme: 40, high: 36, moderate: 33 },
        { level: 22, extreme: 42, high: 37, moderate: 34 },
        { level: 23, extreme: 43, high: 38, moderate: 35 },
        { level: 24, extreme: 44, high: 40, moderate: 37 },
    ],
    resistance: [
        { level: -1, maximum: 1, minimum: 1 },
        { level: 0, maximum: 3, minimum: 1 },
        { level: 1, maximum: 3, minimum: 2 },
        { level: 2, maximum: 5, minimum: 2 },
        { level: 3, maximum: 6, minimum: 3 },
        { level: 4, maximum: 7, minimum: 4 },
        { level: 5, maximum: 8, minimum: 4 },
        { level: 6, maximum: 9, minimum: 5 },
        { level: 7, maximum: 10, minimum: 5 },
        { level: 8, maximum: 11, minimum: 6 },
        { level: 9, maximum: 12, minimum: 6 },
        { level: 10, maximum: 13, minimum: 7 },
        { level: 11, maximum: 14, minimum: 7 },
        { level: 12, maximum: 15, minimum: 8 },
        { level: 13, maximum: 16, minimum: 8 },
        { level: 14, maximum: 17, minimum: 9 },
        { level: 15, maximum: 18, minimum: 9 },
        { level: 16, maximum: 19, minimum: 9 },
        { level: 17, maximum: 19, minimum: 10 },
        { level: 18, maximum: 20, minimum: 10 },
        { level: 19, maximum: 21, minimum: 11 },
        { level: 20, maximum: 22, minimum: 11 },
        { level: 21, maximum: 23, minimum: 12 },
        { level: 22, maximum: 24, minimum: 12 },
        { level: 23, maximum: 25, minimum: 13 },
        { level: 24, maximum: 26, minimum: 13 },
    ],
    weakness: [
        { level: -1, maximum: 1, minimum: 1 },
        { level: 0, maximum: 3, minimum: 1 },
        { level: 1, maximum: 3, minimum: 2 },
        { level: 2, maximum: 5, minimum: 2 },
        { level: 3, maximum: 6, minimum: 3 },
        { level: 4, maximum: 7, minimum: 4 },
        { level: 5, maximum: 8, minimum: 4 },
        { level: 6, maximum: 9, minimum: 5 },
        { level: 7, maximum: 10, minimum: 5 },
        { level: 8, maximum: 11, minimum: 6 },
        { level: 9, maximum: 12, minimum: 6 },
        { level: 10, maximum: 13, minimum: 7 },
        { level: 11, maximum: 14, minimum: 7 },
        { level: 12, maximum: 15, minimum: 8 },
        { level: 13, maximum: 16, minimum: 8 },
        { level: 14, maximum: 17, minimum: 9 },
        { level: 15, maximum: 18, minimum: 9 },
        { level: 16, maximum: 19, minimum: 9 },
        { level: 17, maximum: 19, minimum: 10 },
        { level: 18, maximum: 20, minimum: 10 },
        { level: 19, maximum: 21, minimum: 11 },
        { level: 20, maximum: 22, minimum: 11 },
        { level: 21, maximum: 23, minimum: 12 },
        { level: 22, maximum: 24, minimum: 12 },
        { level: 23, maximum: 25, minimum: 13 },
        { level: 24, maximum: 26, minimum: 13 },
    ],
    hazarddefense: [
        { level: -1, eac: 18, hac: 15, lac: 12, esave: 9, hsave: 8, lsave: 2, hardness: '2-4', hpmin: 11 },
        { level: 0, eac: 19, hac: 16, lac: 13, esave: 10, hsave: 9, lsave: 3, hardness: '3-5', hitPoints: '15-17' },
        { level: 1, eac: 19, hac: 16, lac: 13, esave: 11, hsave: 10, lsave: 4, hardness: '5-7', hitPoints: '23-25' },
        { level: 2, eac: 21, hac: 18, lac: 15, esave: 12, hsave: 11, lsave: 5, hardness: '7-9', hitPoints: '30-34' },
        { level: 3, eac: 22, hac: 19, lac: 16, esave: 14, hsave: 12, lsave: 6, hardness: '10-12', hitPoints: '42-46' },
        { level: 4, eac: 24, hac: 21, lac: 18, esave: 15, hsave: 14, lsave: 8, hardness: '11-13', hitPoints: '46-50' },
        { level: 5, eac: 25, hac: 22, lac: 19, esave: 17, hsave: 15, lsave: 9, hardness: '12-14', hitPoints: '50-54' },
        { level: 6, eac: 27, hac: 24, lac: 21, esave: 18, hsave: 17, lsave: 11, hardness: '13-15', hitPoints: '54-58' },
        { level: 7, eac: 28, hac: 25, lac: 22, esave: 20, hsave: 18, lsave: 12, hardness: '14-16', hitPoints: '58-62' },
        { level: 8, eac: 30, hac: 27, lac: 24, esave: 21, hsave: 19, lsave: 13, hardness: '15-17', hitPoints: '62-66' },
        { level: 9, eac: 31, hac: 28, lac: 25, esave: 23, hsave: 21, lsave: 15, hardness: '16-18', hitPoints: '66-70' },
        { level: 10, eac: 33, hac: 30, lac: 27, esave: 24, hsave: 22, lsave: 16, hardness: '17-19', hitPoints: '70-74' },
        { level: 11, eac: 34, hac: 31, lac: 28, esave: 26, hsave: 24, lsave: 18, hardness: '19-21', hitPoints: '78-82' },
        { level: 12, eac: 36, hac: 33, lac: 30, esave: 27, hsave: 25, lsave: 19, hardness: '20-22', hitPoints: '82-86' },
        { level: 13, eac: 37, hac: 34, lac: 31, esave: 29, hsave: 26, lsave: 20, hardness: '21-23', hitPoints: '86-90' },
        { level: 14, eac: 39, hac: 36, lac: 33, esave: 30, hsave: 28, lsave: 22, hardness: '22-24', hitPoints: '90-94' },
        { level: 15, eac: 40, hac: 37, lac: 34, esave: 32, hsave: 29, lsave: 23, hardness: '23-25', hitPoints: '94-98' },
        { level: 16, eac: 42, hac: 39, lac: 36, esave: 33, hsave: 30, lsave: 25, hardness: '25-27', hitPoints: '101-107' },
        { level: 17, eac: 43, hac: 40, lac: 37, esave: 35, hsave: 32, lsave: 26, hardness: '27-29', hitPoints: '109-115' },
        { level: 18, eac: 45, hac: 42, lac: 39, esave: 36, hsave: 33, lsave: 27, hardness: '29-31', hitPoints: '117-123' },
        { level: 19, eac: 46, hac: 43, lac: 40, esave: 38, hsave: 35, lsave: 29, hardness: '31-33', hitPoints: '125-131' },
        { level: 20, eac: 48, hac: 45, lac: 42, esave: 39, hsave: 36, lsave: 30, hardness: '33-35', hitPoints: '133-139' },
        { level: 21, eac: 49, hac: 46, lac: 43, esave: 41, hsave: 38, lsave: 32, hardness: '36-38', hitPoints: '144-152' },
        { level: 22, eac: 51, hac: 48, lac: 45, esave: 43, hsave: 39, lsave: 33, hardness: '39-41', hitPoints: '156-164' },
        { level: 23, eac: 52, hac: 49, lac: 46, esave: 44, hsave: 40, lsave: 34, hardness: '44-46', hitPoints: '168-176' },
        { level: 24, eac: 54, hac: 51, lac: 48, esave: 46, hsave: 42, lsave: 36, hardness: '46-50', hitPoints: '180-188' },
    ],
    hazardoffense: [
        { level: -1, satk: 10, catk: 8, simpledmg: '2d4+1', complexdmg: '1d4+1', edc: 19, hdc: 16 },
        { level: 0, satk: 11, catk: 8, simpledmg: '2d6+3', complexdmg: '1d6+2', edc: 19, hdc: 16 },
        { level: 1, satk: 13, catk: 9, simpledmg: '2d6+5', complexdmg: '1d6+3', edc: 20, hdc: 17 },
        { level: 2, satk: 14, catk: 11, simpledmg: '2d10+7', complexdmg: '1d10+4', edc: 22, hdc: 18 },
        { level: 3, satk: 16, catk: 12, simpledmg: '2d10+13', complexdmg: '1d10+6', edc: 23, hdc: 20 },
        { level: 4, satk: 17, catk: 14, simpledmg: '4d8+10', complexdmg: '2d8+5', edc: 25, hdc: 21 },
        { level: 5, satk: 19, catk: 15, simpledmg: '4d8+14', complexdmg: '2d8+7', edc: 26, hdc: 22 },
        { level: 6, satk: 20, catk: 17, simpledmg: '4d8+18', complexdmg: '2d8+9', edc: 27, hdc: 24 },
        { level: 7, satk: 22, catk: 18, simpledmg: '4d10+18', complexdmg: '2d10+9', edc: 29, hdc: 25 },
        { level: 8, satk: 23, catk: 20, simpledmg: '4d10+22', complexdmg: '2d10+11', edc: 30, hdc: 26 },
        { level: 9, satk: 25, catk: 21, simpledmg: '4d10+26', complexdmg: '2d10+13', edc: 32, hdc: 28 },
        { level: 10, satk: 26, catk: 23, simpledmg: '4d12+26', complexdmg: '2d12+13', edc: 33, hdc: 29 },
        { level: 11, satk: 28, catk: 24, simpledmg: '4d12+30', complexdmg: '2d12+15', edc: 34, hdc: 30 },
        { level: 12, satk: 29, catk: 26, simpledmg: '6d10+27', complexdmg: '3d10+14', edc: 36, hdc: 32 },
        { level: 13, satk: 31, catk: 27, simpledmg: '6d10+31', complexdmg: '3d10+16', edc: 37, hdc: 33 },
        { level: 14, satk: 32, catk: 29, simpledmg: '6d10+35', complexdmg: '3d10+18', edc: 39, hdc: 34 },
        { level: 15, satk: 34, catk: 30, simpledmg: '6d12+33', complexdmg: '3d12+17', edc: 40, hdc: 36 },
        { level: 16, satk: 35, catk: 32, simpledmg: '6d12+35', complexdmg: '3d12+18', edc: 41, hdc: 37 },
        { level: 17, satk: 37, catk: 33, simpledmg: '6d12+37', complexdmg: '3d12+19', edc: 43, hdc: 38 },
        { level: 18, satk: 38, catk: 35, simpledmg: '6d12+41', complexdmg: '3d12+20', edc: 44, hdc: 40 },
        { level: 19, satk: 40, catk: 36, simpledmg: '8d10+40', complexdmg: '4d10+20', edc: 46, hdc: 41 },
        { level: 20, satk: 41, catk: 38, simpledmg: '8d10+44', complexdmg: '4d10+22', edc: 47, hdc: 42 },
        { level: 21, satk: 43, catk: 39, simpledmg: '8d10+48', complexdmg: '4d10+24', edc: 48, hdc: 44 },
        { level: 22, satk: 44, catk: 41, simpledmg: '8d10+52', complexdmg: '4d10+26', edc: 50, hdc: 45 },
        { level: 23, satk: 46, catk: 42, simpledmg: '8d12+48', complexdmg: '4d12+24', edc: 51, hdc: 46 },
        { level: 24, satk: 47, catk: 44, simpledmg: '8d12+52', complexdmg: '4d12+26', edc: 52, hdc: 48 },
    ],
    level: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
};

window['ROLL_APP_DATA'] = ROLL_APP_DATA;