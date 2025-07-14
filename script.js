
        // Mobile menu toggle
        const menuBtn = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeBtn = document.getElementById('close-mobile-menu');
        if (menuBtn && mobileMenu && closeBtn) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.remove('translate-x-full');
            });
            closeBtn.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
            });
        }

                            document.addEventListener('DOMContentLoaded', function () {
                                const sidebar = document.getElementById('sidebar');
                                const collapseBtn = document.getElementById('btn');
                                let collapsed = false;

                                // Collapse/Expand sidebar on icon click
                                collapseBtn.addEventListener('click', function () {
                                    collapsed = !collapsed;
                                    sidebar.classList.toggle('w-64', !collapsed);
                                    sidebar.classList.toggle('w-20', collapsed);

                                    // Hide all text labels when collapsed
                                    sidebar.querySelectorAll('span.text-gray-600, span.text-blue-600, span.text-sm.text-gray-700.font-medium').forEach(span => {
                                        span.style.display = collapsed ? 'none' : '';
                                    });

                                    // Hide section headers when collapsed
                                    sidebar.querySelectorAll('p.text-gray-500').forEach(p => {
                                        p.style.display = collapsed ? 'none' : '';
                                    });

                                    // Hide right caret icons when collapsed
                                    sidebar.querySelectorAll('i.fas.fa-caret-right').forEach(icon => {
                                        icon.style.display = collapsed ? 'none' : '';
                                    });

                                    // Always show the collapsed view icon
                                    const collapsedIcon = document.getElementById('btn');
                                    collapsedIcon.style.display = '';

                                    // Adjust icon alignment when collapsed
                                    sidebar.querySelectorAll('li.flex, div.py-4').forEach(item => {
                                        if (collapsed) {
                                            item.classList.remove('items-center');
                                            item.classList.add('justify-center');
                                        } else {
                                            item.classList.add('items-center');
                                            item.classList.remove('justify-center');
                                        }
                                    });
                                });

                                // Responsive sidebar: hide on small screens
                                function handleResize() {
                                    if (window.innerWidth < 1024) {
                                        sidebar.style.display = 'none';
                                    } else {
                                        sidebar.style.display = '';
                                    }
                                }
                                window.addEventListener('resize', handleResize);
                                handleResize();
                            });
                    