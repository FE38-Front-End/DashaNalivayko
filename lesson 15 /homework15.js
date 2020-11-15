const floors = prompt ('введите кол-во этажей', '');
const porches = prompt ('введите кол-во подъездов', '');
const aPF = prompt ('введите кол-во квартир на пролете', '');
const an = prompt ('введите номер квартиры', '');

if (floors*porches*aPF < an) {
    alert('квартира not found');
} else {
    var seek = 1;
    for (var i=1; i <=porches; i++){
        for (var j=1; j <= floors; j++){
            for(var k=1; k <= aPF; k++){
                if (seek++==an) {
                    alert(`этаж: ${j}, подъезд: ${i}`);
                    break;
                }
            }
        }
    }

    const porch = Math.ceil((an%(aPF*floor)/aPF));
    
    const floor = Math.ceil((porch* an%(aPF*porches)/floors));

    alert(`этаж: ${floor}, подъезд: ${porch}`);
}

