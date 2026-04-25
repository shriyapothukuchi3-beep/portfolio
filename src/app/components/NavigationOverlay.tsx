import { Link } from 'react-router';

interface NavigationOverlayProps {
  showBack?: boolean;
  backTo?: string;
}

export function NavigationOverlay({ showBack = false, backTo = '/work' }: NavigationOverlayProps) {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 20 }}>
      {/* SHRIYA POTHUKUCHI — home */}
      <Link
        to="/"
        className="absolute pointer-events-auto"
        style={{ left: '21px', top: '41px', width: '362px', height: '48px', opacity: 0 }}
        aria-label="Home"
      />
      {/* WORK */}
      <Link
        to="/work"
        className="absolute pointer-events-auto"
        style={{ left: '792px', top: '41px', width: '104px', height: '48px', opacity: 0 }}
        aria-label="Work"
      />
      {/* GALLERY */}
      <Link
        to="/gallery"
        className="absolute pointer-events-auto"
        style={{ left: '922px', top: '41px', width: '152px', height: '48px', opacity: 0 }}
        aria-label="Gallery"
      />
      {/* ABOUT */}
      <Link
        to="/about"
        className="absolute pointer-events-auto"
        style={{ left: '1098px', top: '41px', width: '118px', height: '48px', opacity: 0 }}
        aria-label="About"
      />
      {/* Back chevron */}
      {showBack && (
        <Link
          to={backTo}
          className="absolute pointer-events-auto"
          style={{ left: '0px', top: '184px', width: '80px', height: '80px', opacity: 0 }}
          aria-label="Back"
        />
      )}
    </div>
  );
}
