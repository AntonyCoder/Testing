import { isValid } from "../algorithmLuhn";

test('Проверка валидности номеров карт', ()=>{
    const cards = ['5178007629893157', '4532419242086958', '371449635398431', '6011619939440799', '2200700762686391', '3535241697993911'];

    for(let item of cards){
        let result = isValid(item);
        expect(result).toBe(true)
    }
});