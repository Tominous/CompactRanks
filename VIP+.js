TriggerRegister.registerChat("VIPPlus").setParameter("contains").setChatCriteria("&a[VIP${color}+${suffix}]").setPriority(Priority.LOWEST);

function VIPPlus(color, suffix, event) {
  var chatMessage = ChatLib.getChatMessage(event, true);
  ChatLib.chat(chatMessage.replace("&a[VIP" + color + "+" + suffix + "]", "&r&a[V" + color + "+&a]"));
  cancel(event);
}