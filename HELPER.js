TriggerRegister.registerChat("HELPER").setParameter("contains").setChatCriteria("&9[HELPER]").setPriority(Priority.LOWEST);

function HELPER(event) {
  var YTchatMessage = ChatLib.getChatMessage(event, true);
  ChatLib.chat(YTchatMessage.replace("&9[HELPER]", "&9[H]"));
  cancel(event);
}