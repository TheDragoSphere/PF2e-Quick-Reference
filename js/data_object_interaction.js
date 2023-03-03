data_object_interaction = [
    {
        title: "Interact",
        icon: "one-action",
        subtitle: "Interact with an object",
        description: "Grab an object, open a door, draw an item, or do a similar action.",
        reference: "Core Rulebook pg 470.",
        bullets: [
            "You use your hand or hands to manipulate an object or the terrain. You can grab an unattended or stored object, open a door, or produce some similar effect. You might have to attempt a skill check to determine if your Interact action was successful.",
        ]
    },
    {
        title: "Release",
        icon: "free",
        subtitle: "Release an Object",
        description: "Release something you’re holding without triggering reactions.",
        reference: "Core Rulebook pg 470.",
        bullets: [
            "You release something you're holding in your hand or hands. This might mean dropping an item, removing one hand from your weapon while continuing to hold it in another hand, releasing a rope suspending a chandelier, or performing a similar action. Unlike most manipulate actions, Release does not trigger reactions that can be triggered by actions with the manipulate trait (such as Attack of Opportunity).",
            "If you want to prepare to Release something outside of your turn, use the Ready activity."
        ]
    },
    {
        title: "Activate",
        icon: "action-slash-react",
        subtitle: "Activate an Item",
        description: "Call forth the effect of an item by properly activating it.",
        reference: "Core Rulebook pg. 532.",
        bullets: [
            "Requirements: You can Activate an Item with the invested trait only if it’s invested by you. If the item requires you to Interact with it, you must be wielding it (if it’s a held item) or touching it with a free hand (if it’s another type of item).",
            "You call forth the effect of an item by properly activating it. This is a special activity that takes a variable number of actions, as listed in the item's stat block.",
            "Some items can be activated as a reaction or free action. In this case, you Activate the Item as a reaction or free action (as appropriate) instead of as an activity. Such cases are noted in the item's Activate entry in its stat block."
        ]
    },
    {
        title: "Trick Magic Item",
        icon: "one-action",
        subtitle: "Tradition (feat)",
        description: "Temporarily grants you the ability to use the item.",
        reference: "Core Rulebook pg. 268.",
        bullets: [
            "Prerequisites trained in Arcana, Nature, Occultism, or Religion",
            "You examine a magic item you normally couldn’t use in an effort to fool it and activate it temporarily. For example, this might allow a fighter to cast a spell from a wand or allow a wizard to cast a spell that’s not on the arcane list using a scroll. You must know what activating the item does, or you can’t attempt to trick it.",        
            "Attempt a check using the skill matching the item’s magic tradition, or matching a tradition that has the spell on its list, if you’re trying to cast a spell from the item. The relevant skills are Arcana for arcane, Nature for primal, Occultism for occult, Religion for divine, or any of the four for an item that has the magical trait and not a tradition trait. The GM determines the DC based on the item’s level (possibly adjusted depending on the item or situation).",            
            "If you activate a magic item that requires a spell attack roll or spell DC and you don’t have the ability to cast spells of the relevant tradition, use your level as your proficiency bonus and the highest of your Intelligence, Wisdom, or Charisma modifiers. If you’re a master in the appropriate skill for the item’s tradition, you instead use the trained proficiency bonus, and if you’re legendary, you instead use the expert proficiency bonus.",            
            "Success: For the rest of the current turn, you can spend actions to activate the item as if you could normally use it.",
            "Failure: You can’t use the item or try to trick it again this turn, but you can try again on subsequent turns.",
            "Critical Failure: You can’t use the item, and you can’t try to trick it again until your next daily preparations."
        ]
    },
    {
        title: "Invest an Item",
        icon: "action-plus-test",
        subtitle: "Invest energy to an item",
        description: "You invest your energy in an item to benefit from its constant magical abilities.",
        reference: "Core Rulebook pg. 531.",
        bullets: [
            "You invest your energy in an item with the invested trait as you don it. This process requires 1 or more Interact actions, usually taking the same amount of time it takes to don the item. Once you’ve Invested the Item, you benefit from its constant magical abilities as long as you meet its other requirements (for most invested items, the only other requirement is that you must be wearing the item). This investiture lasts until you remove the item.",
            "You can invest no more than 10 items per day. If you remove an invested item, it loses its investiture. The item still counts against your daily limit after it loses its investiture. You reset the limit during your daily preparations, at which point you Invest your Items anew. If you’re still wearing items you had invested the previous day, you can typically keep them invested on the new day, but they still count against your limit.",
        ]
    },
    {
        title: "Disable Device",
        icon: "two-action-plus",
        subtitle: "Thievery (trained)",
        description: "Disarm a trap or another complex device.",
        reference: "Core Rulebook pg. 253.",
        bullets: [
            "Requirements Some devices require you to use thieves’ tools when disabling them.",
            "This action allows you to disarm a trap or another complex device. Often, a device requires numerous successes before becoming disabled, depending on its construction and complexity. Thieves’ tools are helpful and sometimes even required to Disable a Device, as determined by the GM, and sometimes a device requires a higher proficiency rank in Thievery to disable it.",            
            "Your Thievery check result determines how much progress you make.",            
            "Critical Success: You disable the device, or you achieve two successes toward disabling a complex device. You leave no trace of your tampering, and you can rearm the device later, if that type of device can be rearmed.",
            "Success: You disable the device, or you achieve one success toward disabling a complex device.",
            "Critical Failure: You trigger the device."
        ]
    },
    {
        title: "Pick a lock",
        icon: "two-action-plus",
        subtitle: "Thievery (trained)",
        description: "Open a lock with thieves' tools.",
        reference: "Core Rulebook pg. 253.",
        bullets: [
            "Requirements: You have thieves’ tools.",
            "Opening a lock without a key is very similar to Disabling a Device, but the DC of the check is determined by the complexity and construction of the lock you are attempting to pick (locks and their DCs are found in their description). Locks of higher qualities might require multiple successes to unlock, since otherwise even an unskilled burglar could easily crack the lock by attempting the check until they rolled a natural 20. If you lack the proper tools, the GM might let you used improvised picks, which are treated as shoddy tools, depending on the specifics of the lock.",           
            "Critical Success: You unlock the lock, or you achieve two successes toward opening a complex lock. You leave no trace of your tampering.",
            "Success: You open the lock, or you achieve one success toward opening a complex lock.",
            "Critical Failure: You break your tools. Fixing them requires using Crafting to Repair them or else swapping in replacement picks (costing 3 sp, or 3 gp for infiltrator thieves’ tools)."
        ]
    },
    {
        title: "Force Open",
        icon: "one-action",
        subtitle: "Athletics",
        description: "Break open a door, window or container.",
        reference: "Core Rulebook pg. 242.",
        bullets: [
            "Using your body, a lever, or some other tool, you attempt to forcefully open a door, window, container or heavy gate. With a high enough result, you can even smash through walls. Without a crowbar, prying something open takes a –2 item penalty to the Athletics check to Force Open.",
            "Critical Success: You open the door, window, container, or gate and can avoid damaging it in the process.",
            "Success: You break the door, window, container, or gate open, and the door, window, container, or gate gains the broken condition. If it’s especially sturdy, the GM might have it take damage but not be broken.",
            "Critical Failure: Your attempt jams the door, window, container, or gate shut, imposing a –2 circumstance penalty on future attempts to Force it Open."
        ]
    }
]
