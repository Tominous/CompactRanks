var compactRanksSettings = new SettingsObject("CompactRanks", [
    {
        name: "Settings",
        settings: [
            new Setting.Toggle("Toggle", true),
            new Setting.Toggle("Tablist Editing", true),
            new Setting.StringSelector("Mode", 0, [
                "Compact", 
                "Super Compact",
                "Extra Compact"
            ])
        ]
    }
]);
compactRanksSettings.setCommand("compactranks").setSize(250, 90);

Setting.register(compactRanksSettings);
var toggle = compactRanksSettings.getSettingObject("Settings", "Toggle");
var mode = compactRanksSettings.getSettingObject("Settings", "Mode");
var toggleTablist = compactRanksSettings.getSettingObject("Settings", "Tablist Editing");

var version = "1.10.2";