TriggerRegister.registerChat("MOD").setParameter("contains").setChatCriteria("&3[BUILD TEAM]").setPriority(Priority.LOWEST);

function MOD(event) {
  var YTchatMessage = ChatLib.getChatMessage(event, true);
  ChatLib.chat(YTchatMessage.replace("&3[BUILD TEAM]", "&3[BT]"));
  cancel(event);
}