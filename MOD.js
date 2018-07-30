TriggerRegister.registerChat("MOD").setParameter("contains").setChatCriteria("&2[MOD]").setPriority(Priority.LOWEST);

function MOD(event) {
  var YTchatMessage = ChatLib.getChatMessage(event, true);
  ChatLib.chat(YTchatMessage.replace("&2[MOD]", "&2[M]"));
  cancel(event);
}