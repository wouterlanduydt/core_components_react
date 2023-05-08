import { Button } from '../../atoms/button';
import { HeaderProps } from './Header.types';

export function Header({ logoHref, logoAlt, buttons, logoSrc, skipToMainLabel, qa }: HeaderProps) {
  return (
    <header className="o-header" data-qa={qa}>
      <div className="o-header__content-wrapper">
        <div className="o-header__content">
          <a href="#main" className="a-button a-button--text a-button--neutral o-header__button-skip">
            {skipToMainLabel}
          </a>
          <a href={logoHref} className="o-header__logo">
            <img src={logoSrc} alt={logoAlt} />
          </a>
        </div>
        <div className="o-header__menu-items">
          {(buttons || []).map((b) => (
            <Button {...b} key={b.id} emphasis="low" theme="neutral" className="o-header__button">
              {b.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  logoHref: '/',
  logoAlt: 'Naar de startpagina',
  logoSrc: 'https://cdn.antwerpen.be/core_branding_scss/6.3.0/assets/images/a-logo.svg',
  skipToMainLabel: 'Ga naar inhoud',
  buttons: []
};

export default Header;
