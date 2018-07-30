TriggerRegister.registerChat("ADMIN").setParameter("contains").setChatCriteria("&c[ADMIN]").setPriority(Priority.LOWEST);

function ADMIN(event) {
  var YTchatMessage = ChatLib.getChatMessage(event, true);
  ChatLib.chat(YTchatMessage.replace("&c[ADMIN]", "&c[A]"));
  cancel(event);
}