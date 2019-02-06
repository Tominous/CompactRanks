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
            function mvpPlusPlus(designColor) {
                if (displayName.toString().contains("MVP§c++")) { //MVP++ &c
                    if (mode.value == 0) {
                        player.setTabDisplayName(new TextComponent(designColor+"[M&c++"+designColor+"] " + name));
                    } else if (mode.value == 1) {
                        player.setTabDisplayName(new TextComponent("&cM "+designColor + name));
                    } else {
                        player.setTabDisplayName(new TextComponent(designColor + name));
                    }
                } else if (displayName.toString().contains("MVP§6++")) { //MVP++ &6
                    if (mode.value == 0) {
                        player.setTabDisplayName(new TextComponent(designColor+"[M&6++"+designColor+"] " + name));
                    } else if (mode.value == 1) {
                        player.setTabDisplayName(new TextComponent("&6M "+designColor + name));
                    } else {
                        player.setTabDisplayName(new TextComponent(designColor + name));
                    }
                } else if (displayName.toString().contains("MVP§a++")) { //MVP++ &a
                    if (mode.value == 0) {
                        player.setTabDisplayName(new TextComponent(designColor+"[M&a++"+designColor+"] " + name));
                    } else if (mode.value == 1) {
                        player.setTabDisplayName(new TextComponent("&aM "+designColor + name));
                    } else {
                        player.setTabDisplayName(new TextComponent(designColor + name));
                    }
                } else if (displayName.toString().contains("MVP§e++")) { //MVP++ &e
                    if (mode.value == 0) {
                        player.setTabDisplayName(new TextComponent(designColor+"[M&e++"+designColor+"] " + name));
                    } else if (mode.value == 1) {
                        player.setTabDisplayName(new TextComponent("&eM "+designColor + name));
                    } else {
                        player.setTabDisplayName(new TextComponent(designColor + name));
                    }
                } else if (displayName.toString().contains("MVP§d++")) { //MVP++ &d
                    if (mode.value == 0) {
                        player.setTabDisplayName(new TextComponent(designColor+"[M&d++"+designColor+"] " + name));
                    } else if (mode.value == 1) {
                        player.setTabDisplayName(new TextComponent("&dM "+designColor + name));
                    } else {
                        player.setTabDisplayName(new TextComponent(designColor + name));
                    }
                } else if (displayName.toString().contains("MVP§f++")) { //MVP++ &f
                    if (mode.value == 0) {
                        player.setTabDisplayName(new TextComponent(designColor+"[M&f++"+designColor+"] " + name));
                    } else if (mode.value == 1) {
                        player.setTabDisplayName(new TextComponent("&fM "+designColor + name));
                    } else {
                        player.setTabDisplayName(new TextComponent(designColor + name));
                    }
                } else if (displayName.toString().contains("MVP§9++")) { //MVP++ &9
                    if (mode.value == 0) {
                        player.setTabDisplayName(new TextComponent(designColor+"[M&9++"+designColor+"] " + name));
                    } else if (mode.value == 1) {
                        player.setTabDisplayName(new TextComponent("&9M "+designColor + name));
                    } else {
                        player.setTabDisplayName(new TextComponent(designColor + name));
                    }
                } else if (displayName.toString().contains("MVP§2++")) { //MVP++ &2
                    if (mode.value == 0) {
                        player.setTabDisplayName(new TextComponent(designColor+"[M&2++"+designColor+"] " + name));
                    } else if (mode.value == 1) {
                        player.setTabDisplayName(new TextComponent("&2M "+designColor + name));
                    } else {
                        player.setTabDisplayName(new TextComponent(designColor + name));
                    }
                } else if (displayName.toString().contains("MVP§4++")) { //MVP++ &4
                    if (mode.value == 0) {
                        player.setTabDisplayName(new TextComponent(designColor+"[M&4++"+designColor+"] " + name));
                    } else if (mode.value == 1) {
                        player.setTabDisplayName(new TextComponent("&4M "+designColor + name));
                    } else {
                        player.setTabDisplayName(new TextComponent(designColor + name));
                    }
                } else if (displayName.toString().contains("MVP§b++")) { //MVP++ &b
                    if (mode.value == 0) {
                        player.setTabDisplayName(new TextComponent(designColor+"[M&b++"+designColor+"] " + name));
                    } else if (mode.value == 1) {
                        player.setTabDisplayName(new TextComponent("&bM "+designColor + name));
                    } else {
                        player.setTabDisplayName(new TextComponent(designColor + name));
                    }
                } else if (displayName.toString().contains("MVP§8++")) { //MVP++ &8
                    if (mode.value == 0) {
                        player.setTabDisplayName(new TextComponent(designColor+"[M&8++"+designColor+"] " + name));
                    } else if (mode.value == 1) {
                        player.setTabDisplayName(new TextComponent("&8M "+designColor + name));
                    } else {
                        player.setTabDisplayName(new TextComponent(designColor + name));
                    }
                } else if (displayName.toString().contains("MVP§5++")) { //MVP++ &5
                    if (mode.value == 0) {
                        player.setTabDisplayName(new TextComponent(designColor+"[M&5++"+designColor+"] " + name));
                    } else if (mode.value == 1) {
                        player.setTabDisplayName(new TextComponent("&5M "+designColor + name));
                    } else {
                        player.setTabDisplayName(new TextComponent(designColor + name));
                    }
                } else if (displayName.toString().contains("MVP§0++")) { //MVP++ &0
                    if (mode.value == 0) {
                        player.setTabDisplayName(new TextComponent(designColor+"[M&0++"+designColor+"] " + name));
                    } else if (mode.value == 1) {
                        player.setTabDisplayName(new TextComponent("&0M "+designColor + name));
                    } else {
                        player.setTabDisplayName(new TextComponent(designColor + name));
                    }
                }
            }
            
            /*
            Error on TICK trigger in module Module{CompactRanks,[chatHandler.js, Main.js, tablistHandler.js],1.10.2}
            javax.script.ScriptException: TypeError: Cannot read property "toString" from undefined in <eval> at line number 205
            */
            if (displayName.toString().startsWith("§b")) { //For MVP++ with blue design
                mvpPlusPlus("&b");
            } else {
                mvpPlusPlus("&6");
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