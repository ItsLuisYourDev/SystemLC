from plyer import notification

def mostrar_notificacion():
    notification.notify(
        title='Saludo',
        message='Hola',
        app_name='SaludoApp',
        timeout=10,  # La notificación desaparecerá después de 10 segundos
    )

if __name__ == "__main__":
    mostrar_notificacion()
