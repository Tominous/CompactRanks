TriggerRegister.registerChat("MOD").setParameter("contains").setChatCriteria("&c[OWNER]").setPriority(Priority.LOWEST);

function MOD(event) {
  var YTchatMessage = ChatLib.getChatMessage(event, true);
  ChatLib.chat(YTchatMessage.replace("&c[OWNER]", "&c[O]"));
  cancel(event);
}