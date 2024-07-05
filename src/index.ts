import { getSeedFromString, splitMix32 } from "@/prng.ts";
import { emojiDictionary } from "@/dictionaries.ts";

interface IOption {
    hasEmoji?: boolean
}

export function hashplate(value: string, options?: IOption) {
    const seed = getSeedFromString(value);
    const random = splitMix32(seed);

    const hasEmoji = options?.hasEmoji ?? true;

    // 京A 123TV
    const province = "黑吉辽京津晋冀鲁豫蒙沪渝苏浙皖闽湘赣鄂桂琼川贵云藏陕甘宁青新粤";
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ"; // removed "I" and "O"
    const alphanumeric = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789"; // removed "I" and "O"

    const rand_p = Math.floor(random() * province.length);
    const rand_alphabet = Math.floor(random() * alphabet.length);
    const randArr = [];
    for (let i = 0; i < 5; i++) {
        randArr.push(Math.floor(random() * alphanumeric.length));
    }
    const result_no_emoji = [
        `${province[rand_p]}${alphabet[rand_alphabet]}`,
        `${alphanumeric[randArr[0]]}${alphanumeric[randArr[1]]}${alphanumeric[randArr[2]]}${alphanumeric[randArr[3]]}${alphanumeric[randArr[4]]}`
    ].join("·");

    const result_emoji = [
        emojiDictionary[Math.floor(random() * emojiDictionary.length)],
        result_no_emoji,
        emojiDictionary[Math.floor(random() * emojiDictionary.length)]
    ].join(" ");

    return hasEmoji ? result_emoji : result_no_emoji;
}
