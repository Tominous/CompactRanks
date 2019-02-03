TriggerRegister.registerTick("tabEdit");

function tabEdit() {
    if (!toggle.value) return;
    if (!toggleTablist.value) return;

    var players = TabList.getNames();
    var playersNumber = players.size();
    for (var i = 0; i < playersNumber; i++) {
        try {
            var player = World.getPlayerByName(players.get(i));
            var name = player.getName();
            var displayName = player.getDisplayName();
        } catch (e) {
            //do nothing to prevent spam in console
        }

        if (displayName.toString().contains("VIP§6+")) { //VIP+
            if (mode.value == 0) {
                player.setTabDisplayName(new TextComponent("&a[V&6+&a] " + name));
            } else if (mode.value == 1) {
                player.setTabDisplayName(new TextComponent("&6V&a " + name));
            } else {
                player.setTabDisplayName(new TextComponent("&a" + name));
            }
        } else if (displayName.toString().contains("VIP")) { //VIP
            if (mode.value == 0) {
                player.setTabDisplayName(new TextComponent("&a[V] " + name));  
            } else if (mode.value == 1) {
                player.setTabDisplayName(new TextComponent("&aV " + name));  
            } else {
                player.setTabDisplayName(new TextComponent("&a" + name));  
            }
        } else if (displayName.toString().contains("MVP") && displayName.toString().contains("++")) {
            if (displayName.toString().contains("MVP§c++")) { //MVP++ &c
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&6[M&c++&6] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&cM&6" + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&6" + name));
                }
            } else if (displayName.toString().contains("MVP§6++")) { //MVP++ &6
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&6[M&6++&6] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&6M " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&6" + name));
                }
            } else if (displayName.toString().contains("MVP§a++")) { //MVP++ &a
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&6[M&a++&6] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&aM&6 " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&6" + name));
                }
            } else if (displayName.toString().contains("MVP§e++")) { //MVP++ &e
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&6[M&e++&6] " + name));
                } else if (mode.vlaue == 1) {
                    player.setTabDisplayName(new TextComponent("&eM&6 " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&6" + name));
                }
            } else if (displayName.toString().contains("MVP§d++")) { //MVP++ &d
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&6[M&d++&6] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&dM&6 " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&6" + name));
                }
            } else if (displayName.toString().contains("MVP§f++")) { //MVP++ &f
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&6[M&f++&6] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&fM&6 " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&6" + name));
                }
            } else if (displayName.toString().contains("MVP§9++")) { //MVP++ &9
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&6[M&9++&6] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&9M&6 " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&6" + name));
                }
            } else if (displayName.toString().contains("MVP§2++")) { //MVP++ &2
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&6[M&2++&6] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&2M&6 " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&6" + name));
                }
            } else if (displayName.toString().contains("MVP§4++")) { //MVP++ &4
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&6[M&4++&6] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&4M&6 " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&6" + name));
                }
            } else if (displayName.toString().contains("MVP§b++")) { //MVP++ &b
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&6[M&b++&6] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&bM&6 " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&6" + name));
                }
            } else if (displayName.toString().contains("MVP§8++")) { //MVP++ &8
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&6[M&8++&6] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&8M&6 " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&6" + name));
                }
            } else if (displayName.toString().contains("MVP§5++")) { //MVP++ &5
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&6[M&5++&6] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&5M&6 " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&6" + name));
                }
            } else if (displayName.toString().contains("MVP§0++")) { //MVP++ &0
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&6[M&0++&6] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&0M&6 " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&6" + name));
                }
            }
        } else if (displayName.toString().contains("MVP") && displayName.toString().contains("+")) {
            if (displayName.toString().contains("MVP§c+")) { //MVP+ &c
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&b[M&c+&b] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&cM&b " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&b" + name));
                }
            } else if (displayName.toString().contains("MVP§6+")) { //MVP+ &6
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&b[M&6+&b] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&6M&b " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&b" + name));
                }
            } else if (displayName.toString().contains("MVP§a+")) { //MVP+ &a
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&b[M&a+&b] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&aM&b " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&b" + name));
                }
            } else if (displayName.toString().contains("MVP§e+")) { //MVP+ &e
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&b[M&e+&b] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&eM&b " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&b" + name));
                }
            } else if (displayName.toString().contains("MVP§d+")) { //MVP+ &d
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&b[M&d+&b] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&dM&b " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&b" + name));
                }
            } else if (displayName.toString().contains("MVP§f+")) { //MVP+ &f
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&b[M&f+&b] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&fM&b " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&b" + name));
                }
            } else if (displayName.toString().contains("MVP§9+")) { //MVP+ &9
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&b[M&9+&b] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&9M&b " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&b" + name));
                }
            } else if (displayName.toString().contains("MVP§2+")) { //MVP+ &2
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&b[M&2+&b] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&2M&b " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&b" + name));
                }
            } else if (displayName.toString().contains("MVP§4+")) { //MVP+ &4
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&b[M&4+&b] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&4M&b " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&b" + name));
                }
            } else if (displayName.toString().contains("MVP§b+")) { //MVP+ &b
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&b[M&b+&b] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&bM&b " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&b" + name));
                }
            } else if (displayName.toString().contains("MVP§8+")) { //MVP+ &8
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&b[M&8+&b] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&8M&b " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&b" + name));
                }
            } else if (displayName.toString().contains("MVP§5+")) { //MVP+ &5
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&b[M&5+&b] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&5M&b " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&b" + name));
                }
            } else if (displayName.toString().contains("MVP§0+")) { //MVP+ &0
                if (mode.value == 0) {
                    player.setTabDisplayName(new TextComponent("&b[M&0+&b] " + name));
                } else if (mode.value == 1) {
                    player.setTabDisplayName(new TextComponent("&0M&b " + name));
                } else {
                    player.setTabDisplayName(new TextComponent("&b" + name));
                }
            }
        } else if (displayName.toString().contains("MVP")) { //MVP
            if (mode.value == 0) {
                player.setTabDisplayName(new TextComponent("&b[M] " + name));
            } else if (mode.value == 1) {
                player.setTabDisplayName(new TextComponent("&bM " + name));
            } else {
                player.setTabDisplayName(new TextComponent("&b" + name));
            }
        } else if (displayName.toString().contains("ADMIN")) { //ADMIN
            if (mode.value == 0) {
                player.setTabDisplayName(new TextComponent("&c[A] " + name));
            } else if (mode.value == 1) {
                player.setTabDisplayName(new TextComponent("&cA " + name));
            } else {
                player.setTabDisplayName(new TextComponent("&c" + name));
            }
        } else if (displayName.toString().contains("BUILD TEAM")) { //BUILD TEAM
            if (mode.value == 0) {
                player.setTabDisplayName(new TextComponent("&3[BT] " + name));
            } else if (mode.value == 1) {
                player.setTabDisplayName(new TextComponent("&3BT " + name));
            } else {
                player.setTabDisplayName(new TextComponent("&3" + name));
            }
        } else if (displayName.toString().contains("HELPER")) { //HELPER
            if (mode.value == 0) {
                player.setTabDisplayName(new TextComponent("&9[H] " + name));
            } else if (mode.value == 1) {
                player.setTabDisplayName(new TextComponent("&9H " + name));
            } else {
                player.setTabDisplayName(new TextComponent("&9" + name));
            }
        } else if (displayName.toString().contains("MOD")) { //MOD
            if (mode.value == 0) {
                player.setTabDisplayName(new TextComponent("&2[M] " + name));
            } else if (mode.value == 1) {
                player.setTabDisplayName(new TextComponent("&2M " + name));
            } else {
                player.setTabDisplayName(new TextComponent("&2" + name));
            }
        } else if (displayName.toString().contains("OWNER")) { //OWNER
            if (mode.value == 0) {
                player.setTabDisplayName(new TextComponent("&c[O] " + name));
            } else if (mode.value == 1) {
                player.setTabDisplayName(new TextComponent("&cO " + name));
            } else {
                player.setTabDisplayName(new TextComponent("&c" + name));
            }
        } else if (displayName.toString().contains("YOUTUBE")) { //YOUTUBE
            if (mode.value == 0) {
                player.setTabDisplayName(new TextComponent("&c[&fYT&c] " + name));
            } else if (mode.value == 1) {
                player.setTabDisplayName(new TextComponent("&fYT&c " + name));
            } else {
                player.setTabDisplayName(new TextComponent("&c" + name));
            }
        } else {

            //rip

        }
    }
}