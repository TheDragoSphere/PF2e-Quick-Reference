data_medicine_actions = [
    {
        title: "First Aid",
        icon: "two-actions",
        subtitle: "Medicine vs recovery/effect",
        description: "Perform first aid on a creature that is dying or bleeding",
        reference: "Core Rulebook pg 248.",
        bullets: [
            "Requirements: You are holding healer's tools, or you are wearing them and have a hand free",
            "You perform first aid on an adjacent creature that is dying or bleeding. If a creature is both dying and bleeding, choose which ailment you’re trying to treat before you roll. You can Administer First Aid again to attempt to remedy the other effect.",
            "<b>Stabilize:</b> Attempt a Medicine check on a creature that has 0 Hit Points and the dying condition. The DC is equal to 5 + that creature’s recovery roll DC (typically 15 + its dying value).",
            "<b>Stop Bleeding:</b> Attempt a Medicine check on a creature that is taking persistent bleed damage, giving them a chance to make another flat check to remove the persistent damage. The DC is usually the DC of the effect that caused the bleed.",
            "<b>Success:</b> If you’re trying to stabilize, the creature loses the dying condition (but remains unconscious). If you’re trying to stop bleeding, the creature attempts a flat check to end the bleeding.",
            "<b>Critical Failure:</b> If you were trying to stabilize, the creature’s dying value increases by 1. If you were trying to stop bleeding, it immediately takes an amount of damage equal to its persistent bleed damage."
        ]
    },
    {
        title: "Battle Medicine",
        icon: "one-action",
        subtitle: "Medicine (feat)",
        description: "Heal in combat",
        reference: "Core  Rulebook pg 258.",
        bullets: [
            "Prerequisites: trained in Medicine.",
            "Requirements: You are holding healer's tools, or you are wearing them and have a hand free",
            "You can patch up wounds, even in combat. Attempt a Medicine check with the same DC as for Treat Wounds and restore the corresponding amount of HP; this doesn't remove the wounded condition. As with Treat Wounds, you can attempt checks against higher DCs if you have the minimum proficiency rank. The target is then temporarily immune to your Battle Medicine for 1 day."
        ]
    },
    {
        title: "Treat Wound",
        icon: "magic-swirl",
        subtitle: "Heal and remove wound",
        description: "",
        reference: "Core Rulebook pg 249.",
        bullets: [
            "You spend 10 minutes treating one injured living creature (targeting yourself, if you so choose). The target is then temporarily immune to Treat Wounds actions for 1 hour, but this interval overlaps with the time you spent treating (so a patient can be treated once per hour, not once per 70 minutes).",
            "The Medicine check DC is usually 15, though the GM might adjust it based on the circumstances. If you’re an expert in Medicine, you can instead attempt a DC 20 check to increase the Hit Points regained by 10; if you’re a master of Medicine, you can instead attempt a DC 30 check to increase the Hit Points regained by 30; and if you’re legendary, you can instead attempt a DC 40 check to increase the Hit Points regained by 50. The damage dealt on a critical failure remains the same.",            
            "If you succeed at your check, you can continue treating the target to grant additional healing. If you treat them for a total of 1 hour, double the Hit Points they regain from Treat Wounds.",            
            "The result of your Medicine check determines how many Hit Points the target regains.",
            "<b>Treat Wounds</b>",
            "<table> <tbody><tr><td><b>Proficiency</b></td><td><b>DC</b></td><td><b>Success Healing</b></td><td><b>Critical Healing</b></td></tr> <tr><td>Trained</td><td>15</td><td>2d8</td><td>4d8</td></tr> <tr><td>Expert*</td><td>20</td><td>2d8+10</td><td>4d8+10</td></tr><tr><td>Master*</td><td>30</td><td>2d8+30</td><td>4d8+30</td></tr><tr><td>Legendary*</td><td>40</td><td>2d8+50</td><td>4d8+50</td></tr> </tbody></table>",
            "* Rolling against a higher DC is optional.",            
            "Critical Success The target regains 4d8 Hit Points, and its wounded condition is removed.",
            "Success The target regains 2d8 Hit Points, and its wounded condition is removed.",
            "Critical Failure The target takes 1d8 damage.",
        ]
    },
    {
        title: "Treat Poison",
        icon: "one-action",
        subtitle: "Medicine (trained)",
        description: "Grants a +2 circ. bonus to the next save vs poison.",
        reference: "Core Rulebook pg 248.",
        bullets: [
            "Prerequisites: trained in Medicine.",
            "Requirements: You are holding healer's tools, or you are wearing them and have a hand free",
            "You can patch up wounds, even in combat. Attempt a Medicine check with the same DC as for Treat Wounds and restore the corresponding amount of HP; this doesn't remove the wounded condition. As with Treat Wounds, you can attempt checks against higher DCs if you have the minimum proficiency rank. The target is then temporarily immune to your Battle Medicine for 1 day."
        ]
    },
]
