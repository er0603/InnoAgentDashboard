export const setOnPageAlert = (iconClasses = ["fas", "fa-exclamation"], messageText = "Some configurations will take effect after restarting your InnoAgent device!") => {

    // Create alert wrapper.
    const alert = document.querySelector("#infoAlert");
    alert.innerHTML = "";

    // Create alert icon.
    const icon = document.createElement("i");
    icon.classList.add(...iconClasses, "pr-2");

    // Create alert message.
    const span = document.createElement("span");
    span.innerHTML = messageText;

    alert.appendChild(icon);
    alert.appendChild(span);
};

export const showOnPageAlert = () => {
    document.querySelector("#infoAlert").classList.remove("d-none");
};

export const hideOnPageAlert = () => {
    document.querySelector("#infoAlert").classList.add("d-none");
};