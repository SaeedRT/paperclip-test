import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Menu from '../Menu';

describe('Menu', () => {
  it('renders the section heading', () => {
    render(<Menu />);
    expect(screen.getByText('Our Menu')).toBeDefined();
  });

  it('renders at least one menu item', () => {
    render(<Menu />);
    expect(screen.getByText('Omakase Platter')).toBeDefined();
  });

  it('renders prices for all items', () => {
    render(<Menu />);
    const prices = screen.getAllByText(/\$\d+/);
    expect(prices.length).toBeGreaterThan(0);
  });
});
