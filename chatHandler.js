//OWNER
register("chat", function(event) {
    if (!toggle.value) return;
    var OWNERmessage = ChatLib.getChatMessage(event, true);
    if (mode.value == 0) {
        ChatLib.chat(OWNERmessage.replace("&c[OWNER]", "&c[O]"));
    } else if (mode.value == 1) {
        ChatLib.chat(OWNERmessage.replace("&c[OWNER]", "&cO"));
    } else {
        ChatLib.chat(OWNERmessage.replace("&c[OWNER]", "&c"));
    }
    cancel(event);
}).setParameter("contains").setChatCriteria("&c[OWNER]").setPriority(Priority.LOWEST);

//ADMIN
register("chat", function(event) {
    if (!toggle.value) return;
    var ADMINmessage = ChatLib.getChatMessage(event, true);
    if (mode.value == 0) {
        ChatLib.chat(ADMINmessage.replace("&c[ADMIN]", "&c[A]"));
    } else if (mode.value == 1){
        ChatLib.chat(ADMINmessage.replace("&c[ADMIN]", "&cA"));
    } else {
        ChatLib.chat(ADMINmessage.replace("&c[ADMIN]", "&c"));
    }
    cancel(event);
}).setParameter("contains").setChatCriteria("&c[ADMIN]").setPriority(Priority.LOWEST);

//MOD
register("chat", function(event) {
    if (!toggle.value) return;
    var MODmessage = ChatLib.getChatMessage(event, true);
    if (mode.value == 0) {
        ChatLib.chat(MODmessage.replace("&2[MOD]", "&2[M]"));
    } else if (mode.value == 1) {
        ChatLib.chat(MODmessage.replace("&2[MOD]", "&2M"));
    } else {
        ChatLib.chat(MODmessage.replace("&2[MOD]", "&2"));
    }
    cancel(event);
}).setParameter("contains").setChatCriteria("&2[MOD]").setPriority(Priority.LOWEST);

//HELPER
register("chat", function(event) {
    if (!toggle.value) return;
    var HELPERmessage = ChatLib.getChatMessage(event, true);
    if (mode.value == 0) {
        ChatLib.chat(HELPERmessage.replace("&9[HELPER]", "&9[H]"));
    } else if (mode.value == 1) {
        ChatLib.chat(HELPERmessage.replace("&9[HELPER]", "&9H"));
    } else {
        ChatLib.chat(HELPERmessage.replace("&9[HELPER]", "&9"));
    }
    cancel(event);
}).setParameter("contains").setChatCriteria("&9[HELPER]").setPriority(Priority.LOWEST);

//BUILD TEAM
register("chat", function(event) {
    if (!toggle.value) return;
    var BUILD_TEAMmessage = ChatLib.getChatMessage(event, true);
    if (mode.value == 0) {
        ChatLib.chat(BUILD_TEAMmessage.replace("&3[BUILD TEAM]", "&3[BT]"));
    } else if (mode.value == 1) {
        ChatLib.chat(BUILD_TEAMmessage.replace("&3[BUILD TEAM]", "&3BT"));
    } else {
        ChatLib.chat(BUILD_TEAMmessage.replace("&3[BUILD TEAM]", "&3"));
    }
    cancel(event);
}).setParameter("contains").setChatCriteria("&3[BUILD TEAM]").setPriority(Priority.LOWEST);

//YOUTUBE
register("chat", function(event) {
    if (!toggle.value) return;
    var YOUTUBEmessage = ChatLib.getChatMessage(event, true);
    if (mode.value == 0) {
        ChatLib.chat(YOUTUBEmessage.replace("&c[&fYOUTUBE&c]", "&r&c[&fYT&c]"));
    } else if (mode.value == 1) {
        ChatLib.chat(YOUTUBEmessage.replace("&c[&fYOUTUBE&c]", "&r&fYT&c"));
    } else {
        ChatLib.chat(YOUTUBEmessage.replace("&c[&fYOUTUBE&c]", "&r&c"));
    }
    cancel(event);
}).setParameter("contains").setChatCriteria("&c[&fYOUTUBE&c]").setPriority(Priority.LOWEST);

//MVP++
register("chat", function(color, event) { //TODO: Fix MVP++ with &b
    if (!toggle.value) return;
    var MVPPLUSPLUSmessage = ChatLib.getChatMessage(event, true);
    if (mode.value == 0) {
        ChatLib.chat(MVPPLUSPLUSmessage.replace("&6[MVP" + color + "++&6]", "&r&6[M" + color + "++&6]"));
    } else if (mode.value == 1) {
        ChatLib.chat(MVPPLUSPLUSmessage.replace("&6[MVP" + color + "++&6]", "&r"+color+"M&6"));
    } else {
        ChatLib.chat(MVPPLUSPLUSmessage.replace("&6[MVP" + color + "++&6]", "&r&6"));
    }
    cancel(event);
}).setParameter("contains").setChatCriteria("&6[MVP${color}++&6]").setPriority(Priority.LOWEST);

//MVP+
register("chat", function(color, event) {
    if (!toggle.value) return;
    var MVPPLUSmessage = ChatLib.getChatMessage(event, true);
    if (mode.value == 0) {
        ChatLib.chat(MVPPLUSmessage.replace("&b[MVP" + color + "+&b]", "&r&b[M" + color + "+&b]"));
    } else if (mode.value == 1) {
        ChatLib.chat(MVPPLUSmessage.replace("&b[MVP" + color + "+&b]", "&r"+color+"M&b"));
    } else {
        ChatLib.chat(MVPPLUSmessage.replace("&b[MVP" + color + "+&b]", "&r&b"));
    }
    cancel(event);
}).setParameter("contains").setChatCriteria("&b[MVP${color}+&b]").setPriority(Priority.LOWEST);

//MVP
register("chat", function(event) {
    if (!toggle.value) return;
    var MVPmessage = ChatLib.getChatMessage(event, true);
    if (mode.value == 0) {
        ChatLib.chat(MVPmessage.replace("&b[MVP]", "&b[M]"));
    } else if (mode.value == 1) {
        ChatLib.chat(MVPmessage.replace("&b[MVP]", "&bM"));
    } else {
        ChatLib.chat(MVPmessage.replace("&b[MVP]", "&b"));
    }
    cancel(event);
}).setParameter("contains").setChatCriteria("&b[MVP]").setPriority(Priority.LOWEST);

//VIP+
register("chat", function(event) {
    if (!toggle.value) return;
    var VIPPLUSmessage = ChatLib.getChatMessage(event, true);
    if (mode.value == 0) {
        ChatLib.chat(VIPPLUSmessage.replace("&a[VIP&6+&a]", "&r&a[V&6+&a]"));
    } else if (mode.value == 1) {
        ChatLib.chat(VIPPLUSmessage.replace("&a[VIP&6+&a]", "&r&6V&a"));
    } else {
        ChatLib.chat(VIPPLUSmessage.replace("&a[VIP&6+&a]", "&r&a"));
    }
    cancel(event);
}).setParameter("contains").setChatCriteria("&a[VIP&6+&a]").setPriority(Priority.LOWEST);

//VIP
register("chat", function(event) {
    if (!toggle.value) return;
    var VIPmessage = ChatLib.getChatMessage(event, true);
    if (mode.value == 0) {
        ChatLib.chat(VIPmessage.replace("&a[VIP]", "&r&a[V]"));
    } else if (mode.vlaue == 1) {
        ChatLib.chat(VIPmessage.replace("&a[VIP]", "&r&aV"));
    } else {
        ChatLib.chat(VIPmessage.replace("&a[VIP]", "&r&a"));
    }
    cancel(event);
}).setParameter("contains").setChatCriteria("&a[VIP]").setPriority(Priority.LOWEST);