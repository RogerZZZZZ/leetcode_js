/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var bulls = 0;
    var cows = 0;
    var numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0 ,0];
    for (var i = 0; i < secret.length; i++) {
        if (secret[i] == guess[i]){
            bulls++;
        } else {
            if (numbers[secret[i]]++ < 0){
                cows++;
            }
            if (numbers[guess[i]]-- > 0) cows++;
        }
    }
    return bulls + "A" + cows + "B";

};
