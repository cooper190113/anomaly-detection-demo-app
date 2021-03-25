export function getIcon(messageType) {
  let icon;
  switch(messageType) {
    case "danger":
      icon = "exclamation-triangle";
      break;
    case "success":
      icon = "ok";
      break;
    case "warning":
      icon = "warning-triangle-o";
      break;
    default:
      icon = "info";
      break;
  }
  return icon;
}
