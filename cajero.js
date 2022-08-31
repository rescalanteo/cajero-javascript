
function withdraw() {
    const account = getCurrentAccount();
    const withdrawAmount = getWithdrawAmount();

    account.saldo = account.saldo - withdrawAmount;

    console.log(account);
}

function getWithdrawAmount() {
    return parseInt(document.getElementById("withdraw").value);
}