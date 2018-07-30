TriggerRegister.registerChat("VIP").setParameter("contains").setChatCriteria("&a[VIP]").setPriority(Priority.LOWEST);

function VIP(event) {
  var YTchatMessage = ChatLib.getChatMessage(event, true);
  ChatLib.chat(YTchatMessage.replace("&a[VIP]", "&a[V]"));
  cancel(event);
}