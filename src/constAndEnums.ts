let nums = [1, 2, 3] as const;
//nums.push(1);// this will throw error as nums is a constant now

// using const as enum
let SKILLS = ['novice', 'intermediate', 'master'] as const;
type SkillType = (typeof SKILLS)[number];

{
    type Person = {
        name: string;
        skillLevel: SkillType
    }
}



