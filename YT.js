TriggerRegister.registerChat("newYT").setParameter("contains").setChatCriteria("&c[&fYOUTUBE&c]").setPriority(Priority.LOWEST);

function newYT(event) {
  var YTchatMessage = ChatLib.getChatMessage(event, true);
  ChatLib.chat(YTchatMessage.replace("&c[&fYOUTUBE&c]", "&c[&fYT&c]"));
  cancel(event);
}