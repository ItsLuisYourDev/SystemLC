import random
def kripto(cad = str, sw = int):
    if sw > 1 or sw < 0:
        return "Error chorrociento parametro no valido"
    new_cad=""
    if not(type(cad) == str):
        try:
            cad = str(cad)
        except:
            return ""
    if len(cad)>0:
        if sw == 0:
            for letra in cad:
                aux = ord(letra)
                for j in range(6):
                    x = random.randrange(65,122)
                    new_cad = new_cad + chr(x)
                new_cad = new_cad + chr(aux+3)
        else:
            for z in range(6,len(cad)+1,7):
                aux = ord(cad[z])
                new_cad = new_cad + chr(aux-3)      
    return new_cad   


cifrar = kripto("Hola",0)
print(cifrar)
print(kripto(cifrar,1))

