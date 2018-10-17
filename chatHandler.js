//OWNER
register("chat", function(event) {
    if (!toggle.value) return;
    var OWNERmessage = ChatLib.getChatMessage(event, true);
    ChatLib.chat(OWNERmessage.replace("&c[OWNER]", "&c[O]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&c[OWNER]").setPriority(Priority.LOWEST);

//ADMIN
register("chat", function(event) {
    if (!toggle.value) return;
    var ADMINmessage = ChatLib.getChatMessage(event, true);
    ChatLib.chat(ADMINmessage.replace("&c[ADMIN]", "&c[A]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&c[ADMIN]").setPriority(Priority.LOWEST);

//MOD
register("chat", function(event) {
    if (!toggle.value) return;
    var MODmessage = ChatLib.getChatMessage(event, true);
    ChatLib.chat(MODmessage.replace("&2[MOD]", "&2[M]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&2[MOD]").setPriority(Priority.LOWEST);

//HELPER
register("chat", function(event) {
    if (!toggle.value) return;
    var HELPERmessage = ChatLib.getChatMessage(event, true);
    ChatLib.chat(HELPERmessage.replace("&9[HELPER]", "&9[H]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&9[HELPER]").setPriority(Priority.LOWEST);

//BUILD TEAM
register("chat", function(event) {
    if (!toggle.value) return;
    var BUILD_TEAMmessage = ChatLib.getChatMessage(event, true);
    ChatLib.chat(BUILD_TEAMmessage.replace("&3[BUILD TEAM]", "&3[BT]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&3[BUILD TEAM]").setPriority(Priority.LOWEST);

//YOUTUBE
register("chat", function(event) {
    if (!toggle.value) return;
    var YOUTUBEmessage = ChatLib.getChatMessage(event, true);
    ChatLib.chat(YOUTUBEmessage.replace("&c[&fYOUTUBE&c]", "&r&c[&fYT&c]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&c[&fYOUTUBE&c]").setPriority(Priority.LOWEST);

//MVP++
register("chat", function(color, suffix, event) {
    if (!toggle.value) return;
    var MVPPLUSPLUSmessage = ChatLib.getChatMessage(event, true);
    ChatLib.chat(MVPPLUSPLUSmessage.replace("&6[MVP" + color + "++" + suffix + "]", "&r&6[M" + color + "++&6]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&6[MVP${color}++${suffix}]").setPriority(Priority.LOWEST);

//MVP+
register("chat", function(color, suffix, name, event) {
    if (!toggle.value) return;
    var MVPPLUSmessage = ChatLib.getChatMessage(event, true);;
    ChatLib.chat(MVPPLUSmessage.replace("&b[MVP" + color + "+" + suffix + "] " + name, "&r&b[M" + color + "+&b] " + name));
    cancel(event);
}).setParameter("contains").setChatCriteria("&b[MVP${color}+${suffix}] ${name}").setPriority(Priority.LOWEST);

//MVP
register("chat", function(event) {
    if (!toggle.value) return;
    var MVPmessage = ChatLib.getChatMessage(event, true);
    ChatLib.chat(MVPmessage.replace("&b[MVP]", "&b[M]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&b[MVP]").setPriority(Priority.LOWEST);

//VIP+
register("chat", function(event) {
    if (!toggle.value) return;
    var VIPPLUSmessage = ChatLib.getChatMessage(event, true);
    ChatLib.chat(VIPPLUSmessage.replace("&a[VIP&6+&a]", "&r&a[V&6+&a]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&a[VIP&6+&a]").setPriority(Priority.LOWEST);

//VIP
register("chat", function(event) {
    if (!toggle.value) return;
    var VIPmessage = ChatLib.getChatMessage(event, true);
    ChatLib.chat(VIPmessage.replace("&a[VIP]", "&r&a[V]"));
    cancel(event);
}).setParameter("contains").setChatCriteria("&a[VIP]").setPriority(Priority.LOWEST);