describe("Functie voertuigen tellen", function () {
    let v;
    beforeEach(async () => {
        v = new Voertuigen('motorvoertuigen.json');
        await v.haalGegevensOp();
    });

    it("jonger dan een jaar in jaar 2000", function () {
        v.tabelVullen('<1 jr');
        expect(v.voertuigenTellen('<1 jr', 2000)).toBe(734075);
    });
});
