import { test, expect } from "vitest";
import { hashplate } from "@/index.ts";

test("hash hello world", () => {
    const input = "Hello World!";

    const hash = hashplate(input);
    expect(hash).toBe("🍢 渝G·VGUA1 🪣");

    const hash2 = hashplate(input, {
        hasEmoji: false
    });
    expect(hash2).toBe("渝G·VGUA1");
});
