TriggerRegister.registerTick("tabEdit");

function tabEdit() {
    if (!toggle.value) return;

    var players = TabList.getNames();
    var playersNumber = players.size();
    for (var i = 0; i < playersNumber; i++) {
        var player = World.getPlayerByName(players.get(i));
        var displayName = player.getDisplayName();

        if (displayName.toString().contains("VIP§6+")) {
            player.setTabDisplayName(new TextComponent("&a[V&6+&a] " + player.getName()));
        } else if (displayName.setFormatted(false).toString().contains("VIP")) {
            player.setTabDisplayName(new TextComponent("&a[V] " + player.getName()));   
        } else if (displayName.toString().contains("MVP") && displayName.toString().contains("++")) {
            if (displayName.toString().contains("MVP§c++")) {
                player.setTabDisplayName(new TextComponent("&6[M&c++&6] " + player.getName()));
            } else if (displayName.toString().contains("MVP§6++")) {
                player.setTabDisplayName(new TextComponent("&6[M&6++&6] " + player.getName()));
            } else if (displayName.toString().contains("MVP§a++")) {
                player.setTabDisplayName(new TextComponent("&6[M&a++&6] " + player.getName()));
            } else if (displayName.toString().contains("MVP§e++")) {
                player.setTabDisplayName(new TextComponent("&6[M&e++&6] " + player.getName()));
            } else if (displayName.toString().contains("MVP§d++")) {
                player.setTabDisplayName(new TextComponent("&6[M&d++&6] " + player.getName()));
            } else if (displayName.toString().contains("MVP§f++")) {
                player.setTabDisplayName(new TextComponent("&6[M&f++&6] " + player.getName()));
            } else if (displayName.toString().contains("MVP§9++")) {
                player.setTabDisplayName(new TextComponent("&6[M&9++&6] " + player.getName()));
            } else if (displayName.toString().contains("MVP§2++")) {
                player.setTabDisplayName(new TextComponent("&6[M&2++&6] " + player.getName()));
            } else if (displayName.toString().contains("MVP§4++")) {
                player.setTabDisplayName(new TextComponent("&6[M&4++&6] " + player.getName()));
            } else if (displayName.toString().contains("MVP§b++")) {
                player.setTabDisplayName(new TextComponent("&6[M&b++&6] " + player.getName()));
            } else if (displayName.toString().contains("MVP§8++")) {
                player.setTabDisplayName(new TextComponent("&6[M&8++&6] " + player.getName()));
            } else if (displayName.toString().contains("MVP§5++")) {
                player.setTabDisplayName(new TextComponent("&6[M&5++&6] " + player.getName()));
            } else if (displayName.toString().contains("MVP§0++")) {
                player.setTabDisplayName(new TextComponent("&6[M&0++&6] " + player.getName()));
            }
        } else if (displayName.toString().contains("MVP") && displayName.toString().contains("+")) {
            if (displayName.toString().contains("MVP§c+")) {
                player.setTabDisplayName(new TextComponent("&b[M&c+&b] " + player.getName()));
            } else if (displayName.toString().contains("MVP§6+")) {
                player.setTabDisplayName(new TextComponent("&b[M&6+&b] " + player.getName()));
            } else if (displayName.toString().contains("MVP§a+")) {
                player.setTabDisplayName(new TextComponent("&b[M&a+&b] " + player.getName()));
            } else if (displayName.toString().contains("MVP§e+")) {
                player.setTabDisplayName(new TextComponent("&b[M&e+&b] " + player.getName()));
            } else if (displayName.toString().contains("MVP§d+")) {
                player.setTabDisplayName(new TextComponent("&b[M&d+&b] " + player.getName()));
            } else if (displayName.toString().contains("MVP§f+")) {
                player.setTabDisplayName(new TextComponent("&b[M&f+&b] " + player.getName()));
            } else if (displayName.toString().contains("MVP§9+")) {
                player.setTabDisplayName(new TextComponent("&b[M&9+&b] " + player.getName()));
            } else if (displayName.toString().contains("MVP§2+")) {
                player.setTabDisplayName(new TextComponent("&b[M&2+&b] " + player.getName()));
            } else if (displayName.toString().contains("MVP§4+")) {
                player.setTabDisplayName(new TextComponent("&b[M&4+&b] " + player.getName()));
            } else if (displayName.toString().contains("MVP§b+")) {
                player.setTabDisplayName(new TextComponent("&b[M&b+&b] " + player.getName()));
            } else if (displayName.toString().contains("MVP§8+")) {
                player.setTabDisplayName(new TextComponent("&b[M&8+&b] " + player.getName()));
            } else if (displayName.toString().contains("MVP§5+")) {
                player.setTabDisplayName(new TextComponent("&b[M&5+&b] " + player.getName()));
            } else if (displayName.toString().contains("MVP§0+")) {
                player.setTabDisplayName(new TextComponent("&b[M&0+&b] " + player.getName()));
            }
        } else if (displayName.toString().contains("MVP")) {
            player.setTabDisplayName(new TextComponent("&b[M] " + player.getName()));
        } else if (displayName.toString().contains("ADMIN")) {
            player.setTabDisplayName(new TextComponent("&c[A] " + player.getName()));
        } else if (displayName.toString().contains("BUILD TEAM")) {
            player.setTabDisplayName(new TextComponent("&3[BT] " + player.getName()));
        } else if (displayName.toString().contains("HELPER")) {
            player.setTabDisplayName(new TextComponent("&9[H] " + player.getName()));
        } else if (displayName.toString().contains("MOD")) {
            player.setTabDisplayName(new TextComponent("&2[M] " + player.getName()));
        } else if (displayName.toString().contains("OWNER")) {
            player.setTabDisplayName(new TextComponent("&c[O] " + player.getName()));
        } else if (displayName.toString().contains("YOUTUBE")) {
            player.setTabDisplayName(new TextComponent("&c[&fYT&c] " + player.getName()));
        } else {

            //rip

        }
    }
}