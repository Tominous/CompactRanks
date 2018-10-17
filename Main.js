var compactRanksSettings = new SettingsObject("CompactRanks", [
    {
        name: "Settings",
        settings: [
            new Setting.Toggle("toggle", true)
        ]
    }
]);

Setting.register(compactRanksSettings);
var toggle = compactRanksSettings.getSettingObject("Settings", "toggle");
var version = "1.9.9";

register("command", function(arg1, arg2) {
    if (arg1 == undefined || arg1 == null) {
        if (toggle.value) {
            toggle.value = false;
            ChatLib.chat("&8[CompactRanks]&7 Off");
            compactRanksSettings.save();
        } else if (!toggle.value) {
            toggle.value = true;
            ChatLib.chat("&8[CompactRanks]&7 On");
            compactRanksSettings.save();
        }
    }
    if (arg1 == "toggle.value") {
        if (toggle.value) {
            toggle.value = false;
            ChatLib.chat("&8[CompactRanks]&7 Off");
            compactRanksSettings.save();
        } else if (!toggle.value) {
            toggle.value = true;
            ChatLib.chat("&8[CompactRanks]&7 On");
            compactRanksSettings.save();
        }
    }
    if (arg1 == "ranklist") { 
         ChatLib.chat(new Message(
            "&8&m" + ChatLib.getChatBreak("-") + "\n",
            "&c[OWNER] &7-> &c[O]\n",
            "&c[ADMIN] &7-> &c[A]\n",
            "&2[MOD] &7-> &2[M]\n",
            "&9[HELPER] &7-> &9[H]\n",
            "&3[BUILD TEAM] &7-> &3[BT]\n",
            "&c[&fYOUTUBE&c] &7-> &c[&fYT&c]\n",
            "&6[MVP&c++&6] &7-> &6[M&c++&6]\n",
            "&b[MVP&c+&b] &7-> &b[M&c+&b]\n",
            "&b[MVP] &7-> &b[M]\n",
            "&a[VIP&6+&a] &7-> &a[V&6+&a]\n",
            "&a[VIP] &7-> &a[V]\n",
            "&8&m" + ChatLib.getChatBreak("-")
        ));
    }
    if (arg1 == "help") {
        ChatLib.chat(new Message(
            "&8&m" + ChatLib.getChatBreak("-") + "\n",
            "&7/compactranks &3toggle &b&otoggles on and off CompactRanks\n",
            "&7/compactranks &3ranklist &b&oDisplays all the ranks' compact designs\n",
            "&7/compactranks &3help &b&oDisplays this help message\n",
            "&8&m" + ChatLib.getChatBreak("-")
        ));
    }
}).setCommandName("compactranks");