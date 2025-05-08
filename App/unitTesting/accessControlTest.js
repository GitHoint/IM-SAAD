function canAccessProcurement(userRole) {
    return userRole === 'admin' || userRole === 'librarian';
  }
  
  test('Only admin and librarian can access procurement', () => {
    expect(canAccessProcurement('admin')).toBe(true);
    expect(canAccessProcurement('librarian')).toBe(true);
    expect(canAccessProcurement('member')).toBe(false);
  });
  