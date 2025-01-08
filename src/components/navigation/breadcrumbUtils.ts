interface BreadcrumbItem {
  label: string;
  path: string;
}

const routeLabels: Record<string, string> = {
  '': 'Home',
  'inventory': 'Inventory',
  'about': 'About Us',
  'contact': 'Contact',
  'profile': 'Profile'
};

export function getBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split('/').filter(Boolean);
  const items: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];

  let currentPath = '';
  for (const path of paths) {
    currentPath += `/${path}`;
    const label = routeLabels[path] || path;
    items.push({ label, path: currentPath });
  }

  return items;
}