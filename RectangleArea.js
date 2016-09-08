/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var area1 = (C-A)*(D-B), area2 = (G-E)*(H-F);
    var coverX = C < E ? 0 : C < G ? A < E ? C-E : C-A : A > G ? 0 : A < E ? G-E : G-A;
    var coverY = D < F ? 0 : D < H ? B < F ? D-F : D-B : B > H ? 0 : B < F ? H-F : H-B;
    return area1 + area2 - coverX * coverY;
};
