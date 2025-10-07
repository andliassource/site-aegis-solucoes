from playwright.sync_api import sync_playwright, expect
import time

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # URL do servidor local
        server_url = 'http://localhost:8000'

        # Tenta conectar ao servidor, com algumas tentativas para dar tempo de iniciar
        max_retries = 5
        for i in range(max_retries):
            try:
                page.goto(server_url, timeout=5000)
                break
            except Exception as e:
                print(f"Tentativa {i+1} falhou: {e}. Tentando novamente em 2 segundos...")
                time.sleep(2)
        else:
            print("Não foi possível conectar ao servidor local. Abortando.")
            browser.close()
            return

        # Localiza a seção de contato
        contact_section = page.locator('#contato')
        expect(contact_section).to_be_visible()

        # Verifica se o botão com o link mailto: existe
        mailto_button = contact_section.get_by_role('link', name='Falar com um Especialista')
        expect(mailto_button).to_be_visible()
        expect(mailto_button).to_have_attribute('href', 'mailto:contato@aegis-solucoes.com.br')

        # Tira uma captura de tela da seção de contato
        screenshot_path = 'jules-scratch/verification/verification.png'
        contact_section.screenshot(path=screenshot_path)

        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    run_verification()