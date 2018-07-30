TriggerRegister.registerChat("MVP").setParameter("contains").setChatCriteria("&b[MVP]").setPriority(Priority.LOWEST);

function MVP(event) {
  var YTchatMessage = ChatLib.getChatMessage(event, true);
  ChatLib.chat(YTchatMessage.replace("&b[MVP]", "&b[M]"));
  cancel(event);
}