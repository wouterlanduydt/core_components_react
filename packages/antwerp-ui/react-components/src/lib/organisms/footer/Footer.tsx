import React from 'react';
import { renderHTMLLink } from '../../../utils/render.utils';
import { Button } from '../../atoms/button';
import { FooterProps } from './Footer.types';

export function Footer({ backToTop, backToTopAriaLabel, items, qa }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const renderItems = () =>
    items?.map((i, index) => {
      const item = renderHTMLLink(i);
      const addDivider: boolean = items.length > 1 && index !== items.length - 1;
      return (
        <React.Fragment key={i.label}>
          {item}
          {addDivider ? ' | ' : ''}
        </React.Fragment>
      );
    });

  return (
    <footer className="o-footer" data-qa={qa}>
      <span className="o-footer__label">{renderItems()}</span>
      {backToTop && (
        <Button
          className="o-footer__button a-button--secondary"
          addOn={{ type: 'icon', iconProps: { name: 'arrow-up-1' } }}
          onClick={scrollToTop}
          ariaLabel={backToTopAriaLabel}
        />
      )}
    </footer>
  );
}

Footer.default = {
  items: [],
  ariaLabel: 'Go back to top'
};

export default Footer;
