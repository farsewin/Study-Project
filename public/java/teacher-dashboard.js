document.addEventListener('DOMContentLoaded', function() {
    // التنقل بين أقسام لوحة التحكم
    const menuLinks = document.querySelectorAll('.sidebar-menu a[data-section]');
    const contentSections = document.querySelectorAll('.content-section');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section');
            
            // إزالة الفئة النشطة من جميع الروابط والأقسام
            menuLinks.forEach(link => link.parentElement.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // إضافة الفئة النشطة إلى الرابط والقسم المستهدف
            this.parentElement.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
        });
    });
    
    // تسجيل الخروج
    document.getElementById('logout').addEventListener('click', function(e) {
        e.preventDefault();
        if (confirm('هل أنت متأكد من رغبتك في تسجيل الخروج؟')) {
            window.location.href = 'login.html';
        }
    });
    
    // بيانات المشاريع (محاكاة)
    const projects = [
        {
            id: 1,
            title: 'تطبيق ويب لإدارة المكتبات',
            category: 'web',
            description: 'تطوير نظام متكامل لإدارة المكتبات يتيح للمستخدمين البحث عن الكتب واستعارتها وإدارة المخزون.',
            requirements: 'HTML, CSS, JavaScript, Node.js, MongoDB',
            maxStudents: 2,
            date: '2024-03-15'
        },
        {
            id: 4,
            title: 'تطوير نظام إدارة المحتوى',
            category: 'web',
            description: 'تصميم وتطوير نظام إدارة محتوى مخصص يتيح للمستخدمين إنشاء وتحرير ونشر المحتوى بسهولة.',
            requirements: 'PHP, MySQL, JavaScript, Bootstrap',
            maxStudents: 1,
            date: '2024-03-22'
        },
        {
            id: 6,
            title: 'تطبيق تحليل البيانات',
            category: 'ai',
            description: 'تطوير تطبيق لتحليل البيانات الضخمة وعرض النتائج بطريقة مرئية سهلة الفهم.',
            requirements: 'Python, Pandas, Matplotlib, Flask',
            maxStudents: 2,
            date: '2024-03-28'
        },
        {
            id: 7,
            title: 'نظام أمن المعلومات',
            category: 'security',
            description: 'تطوير نظام لاكتشاف ومنع الهجمات الإلكترونية وحماية البيانات الحساسة.',
            requirements: 'Python, Kali Linux, Wireshark',
            maxStudents: 2,
            date: '2024-04-01'
        },
        {
            id: 8,
            title: 'تطبيق إدارة المخزون',
            category: 'web',
            description: 'تطوير نظام لإدارة المخزون والمبيعات للشركات الصغيرة والمتوسطة.',
            requirements: 'React.js, Node.js, MongoDB',
            maxStudents: 2,
            date: '2024-04-05'
        }
    ];
    
    // بيانات المقترحات (محاكاة)
    const proposals = [
        {
            id: 1,
            projectId: 1,
            projectTitle: 'تطبيق ويب لإدارة المكتبات',
            studentName: 'أحمد محمد',
            studentId: '20210123',
            motivation: 'لدي اهتمام كبير بتطوير تطبيقات الويب وأرغب في تطبيق معرفتي في مجال إدارة المكتبات.',
            skills: 'HTML, CSS, JavaScript, Node.js, Express, MongoDB',
            status: 'accepted',
            date: '2024-03-16'
        },
        {
            id: 2,
            projectId: 1,
            projectTitle: 'تطبيق ويب لإدارة المكتبات',
            studentName: 'سارة علي',
            studentId: '20210456',
            motivation: 'أرغب في تطوير مهاراتي في تطوير الويب وتطبيقها في مشروع عملي.',
            skills: 'HTML, CSS, JavaScript, React, Node.js',
            status: 'pending',
            date: '2024-03-17'
        },
        {
            id: 3,
            projectId: 4,
            projectTitle: 'تطوير نظام إدارة المحتوى',
            studentName: 'أحمد محمد',
            studentId: '20210123',
            motivation: 'أرغب في تعميق فهمي لأنظمة إدارة المحتوى وتطوير مهاراتي في PHP وقواعد البيانات.',
            skills: 'PHP, MySQL, JavaScript, HTML, CSS',
            status: 'pending',
            date: '2024-03-23'
        },
        {
            id: 4,
            projectId: 4,
            projectTitle: 'تطوير نظام إدارة المحتوى',
            studentName: 'محمد خالد',
            studentId: '20210789',
            motivation: 'لدي خبرة سابقة في تطوير أنظمة إدارة المحتوى وأرغب في تطبيق معرفتي في هذا المشروع.',
            skills: 'PHP, MySQL, Laravel, JavaScript, Bootstrap',
            status: 'pending',
            date: '2024-03-24'
        }
    ];
    
    // عرض مشاريع الأستاذ
    function displayTeacherProjects() {
        const projectsList = document.getElementById('teacherProjectsList');
        projectsList.innerHTML = '';
        
        projects.forEach(project => {
            const projectProposals = proposals.filter(proposal => proposal.projectId === project.id);
            const pendingProposals = projectProposals.filter(proposal => proposal.status === 'pending').length;
            const acceptedProposals = projectProposals.filter(proposal => proposal.status === 'accepted').length;
            
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <span class="project-category">${getCategoryName(project.category)}</span>
                <p class="project-description">${project.description}</p>
                <div class="project-details">
                    <p><strong>المتطلبات:</strong> ${project.requirements}</p>
                    <p><strong>الحد الأقصى للطلاب:</strong> ${project.maxStudents}</p>
                    <p><strong>تاريخ النشر:</strong> ${formatDate(project.date)}</p>
                    <p><strong>المقترحات:</strong> ${projectProposals.length} (${pendingProposals} قيد الانتظار, ${acceptedProposals} مقبولة)</p>
                </div>
                <div class="project-actions">
                    <button class="edit-project-btn" data-project-id="${project.id}">تعديل</button>
                    <button class="delete-project-btn" data-project-id="${project.id}">حذف</button>
                </div>
            `;
            projectsList.appendChild(projectCard);
        });
        
        // إضافة مستمعي الأحداث لأزرار التعديل والحذف
        document.querySelectorAll('.edit-project-btn').forEach(button => {
            button.addEventListener('click', function() {
                const projectId = parseInt(this.getAttribute('data-project-id'));
                // هنا يمكن إضافة منطق تعديل المشروع
                alert(`سيتم تعديل المشروع رقم ${projectId}`);
            });
        });
        
        document.querySelectorAll('.delete-project-btn').forEach(button => {
            button.addEventListener('click', function() {
                const projectId = parseInt(this.getAttribute('data-project-id'));
                if (confirm('هل أنت متأكد من رغبتك في حذف هذا المشروع؟')) {
                    // هنا يمكن إضافة منطق حذف المشروع
                    alert(`تم حذف المشروع رقم ${projectId}`);
                }
            });
        });
    }
    
    // عرض مقترحات الطلاب
    function displayTeacherProposals() {
        const proposalsList = document.getElementById('teacherProposalsList');
        proposalsList.innerHTML = '';
        
        if (proposals.length === 0) {
            proposalsList.innerHTML = '<p>لا توجد مقترحات مقدمة بعد.</p>';
            return;
        }
        
        const filterValue = document.getElementById('proposalFilter').value;
        let filteredProposals = proposals;
        
        if (filterValue !== 'all') {
            filteredProposals = proposals.filter(proposal => proposal.status === filterValue);
        }
        
        if (filteredProposals.length === 0) {
            proposalsList.innerHTML = '<p>لا توجد مقترحات تطابق معايير التصفية.</p>';
            return;
        }
        
        filteredProposals.forEach(proposal => {
            const proposalCard = document.createElement('div');
            proposalCard.className = 'proposal-card';
            proposalCard.innerHTML = `
                <div class="proposal-header">
                    <h3>${proposal.projectTitle}</h3>
                    <span class="proposal-status status-${proposal.status}">${getStatusName(proposal.status)}</span>
                </div>
                <div class="proposal-details">
                    <div class="detail-group">
                        <label>الطالب:</label>
                        <p>${proposal.studentName} (${proposal.studentId})</p>
                    </div>
                    <div class="detail-group">
                        <label>تاريخ التقديم:</label>
                        <p>${formatDate(proposal.date)}</p>
                    </div>
                </div>
                <div class="proposal-actions">
                    <button class="view-proposal-btn" data-proposal-id="${proposal.id}">عرض التفاصيل</button>
                </div>
            `;
            proposalsList.appendChild(proposalCard);
        });
        
        // إضافة مستمعي الأحداث لأزرار عرض التفاصيل
        document.querySelectorAll('.view-proposal-btn').forEach(button => {
            button.addEventListener('click', function() {
                const proposalId = parseInt(this.getAttribute('data-proposal-id'));
                openProposalDetailsModal(proposalId);
            });
        });
    }
    
    // فتح النافذة المنبثقة لعرض تفاصيل المقترح
    function openProposalDetailsModal(proposalId) {
        const proposal = proposals.find(p => p.id === proposalId);
        if (!proposal) return;
        
        document.getElementById('modalProjectTitle').textContent = proposal.projectTitle;
        document.getElementById('modalStudentName').textContent = `${proposal.studentName} (${proposal.studentId})`;
        document.getElementById('modalMotivation').textContent = proposal.motivation;
        document.getElementById('modalSkills').textContent = proposal.skills;
        document.getElementById('modalSubmissionDate').textContent = formatDate(proposal.date);
        
        const proposalActions = document.getElementById('proposalActions');
        if (proposal.status === 'pending') {
            proposalActions.innerHTML = `
                <button class="accept-btn" id="acceptProposal" data-proposal-id="${proposal.id}">قبول المقترح</button>
                <button class="reject-btn" id="rejectProposal" data-proposal-id="${proposal.id}">رفض المقترح</button>
            `;
            
            // إضافة مستمعي الأحداث لأزرار القبول والرفض
            document.getElementById('acceptProposal').addEventListener('click', function() {
                const proposalId = parseInt(this.getAttribute('data-proposal-id'));
                acceptProposal(proposalId);
            });
            
            document.getElementById('rejectProposal').addEventListener('click', function() {
                const proposalId = parseInt(this.getAttribute('data-proposal-id'));
                rejectProposal(proposalId);
            });
        } else {
            proposalActions.innerHTML = `
                <p class="proposal-status status-${proposal.status}">${getStatusName(proposal.status)}</p>
            `;
        }
        
        document.getElementById('viewProposalModal').style.display = 'flex';
    }
    
    // قبول المقترح
    function acceptProposal(proposalId) {
        const proposal = proposals.find(p => p.id === proposalId);
        if (!proposal) return;
        
        // التحقق من عدد المقترحات المقبولة للمشروع
        const project = projects.find(p => p.id === proposal.projectId);
        const acceptedProposalsForProject = proposals.filter(p => p.projectId === proposal.projectId && p.status === 'accepted').length;
        
        if (acceptedProposalsForProject >= project.maxStudents) {
            alert(`لا يمكن قبول المزيد من المقترحات لهذا المشروع. الحد الأقصى هو ${project.maxStudents} طالب.`);
            return;
        }
        
        proposal.status = 'accepted';
        
        // تحديث واجهة المستخدم
        displayTeacherProjects();
        displayTeacherProposals();
        document.getElementById('viewProposalModal').style.display = 'none';
        
        alert(`تم قبول مقترح الطالب ${proposal.studentName} للمشروع "${proposal.projectTitle}" بنجاح!`);
    }
    
    // رفض المقترح
    function rejectProposal(proposalId) {
        const proposal = proposals.find(p => p.id === proposalId);
        if (!proposal) return;
        
        proposal.status = 'rejected';
        
        // تحديث واجهة المستخدم
        displayTeacherProjects();
        displayTeacherProposals();
        document.getElementById('viewProposalModal').style.display = 'none';
        
        alert(`تم رفض مقترح الطالب ${proposal.studentName} للمشروع "${proposal.projectTitle}".`);
    }
    
    // إضافة مشروع جديد
    const addProjectForm = document.getElementById('addProjectForm');
    addProjectForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('projectTitle').value;
        const description = document.getElementById('projectDescription').value;
        const category = document.getElementById('projectCategory').value;
        const requirements = document.getElementById('projectRequirements').value;
        const maxStudents = parseInt(document.getElementById('projectMaxStudents').value);
        
        // التحقق من صحة البيانات
        if (!title || !description || !category || !requirements || isNaN(maxStudents)) {
            alert('يرجى ملء جميع الحقول المطلوبة');
            return;
        }
        
        // إضافة المشروع الجديد
        const newProject = {
            id: projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1,
            title: title,
            category: category,
            description: description,
            requirements: requirements,
            maxStudents: maxStudents,
            date: new Date().toISOString().split('T')[0]
        };
        
        projects.push(newProject);
        
        // تحديث واجهة المستخدم
        displayTeacherProjects();
        
        // إعادة تعيين النموذج
        addProjectForm.reset();
        
        // تحديث عدد المشاريع في لوحة التحكم
        document.getElementById('myProjectsCount').textContent = projects.length;
        
        alert('تم إضافة المشروع بنجاح!');
    });
    
    // تحديث الملف الشخصي
    const profileForm = document.getElementById('profileForm');
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullName = document.getElementById('profileFullName').value;
        const email = document.getElementById('profileEmail').value;
        const password = document.getElementById('profilePassword').value;
        const confirmPassword = document.getElementById('profileConfirmPassword').value;
        
        // التحقق من صحة البيانات
        if (!fullName || !email) {
            alert('يرجى ملء جميع الحقول المطلوبة');
            return;
        }
        
        // التحقق من تطابق كلمات المرور إذا تم إدخالها
        if (password && password !== confirmPassword) {
            alert('كلمة المرور وتأكيد كلمة المرور غير متطابقين');
            return;
        }
        
        // التحقق من صحة البريد الإلكتروني
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('يرجى إدخال بريد إلكتروني صحيح');
            return;
        }
        
        // محاكاة تحديث البيانات
        document.getElementById('teacherName').textContent = fullName.replace('د. ', '');
        
        alert('تم تحديث بياناتك بنجاح!');
    });
    
    // البحث في المشاريع
    document.getElementById('projectSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        const filteredProjects = projects.filter(project => {
            return project.title.toLowerCase().includes(searchTerm) || 
                   project.description.toLowerCase().includes(searchTerm);
        });
        
        displayFilteredTeacherProjects(filteredProjects);
    });
    
    function displayFilteredTeacherProjects(filteredProjects) {
        const projectsList = document.getElementById('teacherProjectsList');
        projectsList.innerHTML = '';
        
        if (filteredProjects.length === 0) {
            projectsList.innerHTML = '<p>لا توجد مشاريع تطابق معايير البحث.</p>';
            return;
        }
        
        filteredProjects.forEach(project => {
            const projectProposals = proposals.filter(proposal => proposal.projectId === project.id);
            const pendingProposals = projectProposals.filter(proposal => proposal.status === 'pending').length;
            const acceptedProposals = projectProposals.filter(proposal => proposal.status === 'accepted').length;
            
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <span class="project-category">${getCategoryName(project.category)}</span>
                <p class="project-description">${project.description}</p>
                <div class="project-details">
                    <p><strong>المتطلبات:</strong> ${project.requirements}</p>
                    <p><strong>الحد الأقصى للطلاب:</strong> ${project.maxStudents}</p>
                    <p><strong>تاريخ النشر:</strong> ${formatDate(project.date)}</p>
                    <p><strong>المقترحات:</strong> ${projectProposals.length} (${pendingProposals} قيد الانتظار, ${acceptedProposals} مقبولة)</p>
                </div>
                <div class="project-actions">
                    <button class="edit-project-btn" data-project-id="${project.id}">تعديل</button>
                    <button class="delete-project-btn" data-project-id="${project.id}">حذف</button>
                </div>
            `;
            projectsList.appendChild(projectCard);
        });
        
        // إضافة مستمعي الأحداث لأزرار التعديل والحذف
        document.querySelectorAll('.edit-project-btn').forEach(button => {
            button.addEventListener('click', function() {
                const projectId = parseInt(this.getAttribute('data-project-id'));
                // هنا يمكن إضافة منطق تعديل المشروع
                alert(`سيتم تعديل المشروع رقم ${projectId}`);
            });
        });
        
        document.querySelectorAll('.delete-project-btn').forEach(button => {
            button.addEventListener('click', function() {
                const projectId = parseInt(this.getAttribute('data-project-id'));
                if (confirm('هل أنت متأكد من رغبتك في حذف هذا المشروع؟')) {
                    // هنا يمكن إضافة منطق حذف المشروع
                    alert(`تم حذف المشروع رقم ${projectId}`);
                }
            });
        });
    }
    
    // البحث في المقترحات
    document.getElementById('proposalSearch').addEventListener('input', function() {
        filterProposals();
    });
    
    document.getElementById('proposalFilter').addEventListener('change', function() {
        filterProposals();
    });
    
    function filterProposals() {
        const searchTerm = document.getElementById('proposalSearch').value.toLowerCase();
        const filterValue = document.getElementById('proposalFilter').value;
        
        let filteredProposals = proposals;
        
        if (filterValue !== 'all') {
            filteredProposals = filteredProposals.filter(proposal => proposal.status === filterValue);
        }
        
        filteredProposals = filteredProposals.filter(proposal => {
            return proposal.projectTitle.toLowerCase().includes(searchTerm) || 
                   proposal.studentName.toLowerCase().includes(searchTerm) ||
                   proposal.studentId.includes(searchTerm);
        });
        
        displayFilteredTeacherProposals(filteredProposals);
    }
    
    function displayFilteredTeacherProposals(filteredProposals) {
        const proposalsList = document.getElementById('teacherProposalsList');
        proposalsList.innerHTML = '';
        
        if (filteredProposals.length === 0) {
            proposalsList.innerHTML = '<p>لا توجد مقترحات تطابق معايير البحث.</p>';
            return;
        }
        
        filteredProposals.forEach(proposal => {
            const proposalCard = document.createElement('div');
            proposalCard.className = 'proposal-card';
            proposalCard.innerHTML = `
                <div class="proposal-header">
                    <h3>${proposal.projectTitle}</h3>
                    <span class="proposal-status status-${proposal.status}">${getStatusName(proposal.status)}</span>
                </div>
                <div class="proposal-details">
                    <div class="detail-group">
                        <label>الطالب:</label>
                        <p>${proposal.studentName} (${proposal.studentId})</p>
                    </div>
                    <div class="detail-group">
                        <label>تاريخ التقديم:</label>
                        <p>${formatDate(proposal.date)}</p>
                    </div>
                </div>
                <div class="proposal-actions">
                    <button class="view-proposal-btn" data-proposal-id="${proposal.id}">عرض التفاصيل</button>
                </div>
            `;
            proposalsList.appendChild(proposalCard);
        });
        
        // إضافة مستمعي الأحداث لأزرار عرض التفاصيل
        document.querySelectorAll('.view-proposal-btn').forEach(button => {
            button.addEventListener('click', function() {
                const proposalId = parseInt(this.getAttribute('data-proposal-id'));
                openProposalDetailsModal(proposalId);
            });
        });
    }
    
    // إغلاق النافذة المنبثقة
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });
    
    // وظائف مساعدة
    function getCategoryName(category) {
        const categories = {
            'web': 'تطوير الويب',
            'mobile': 'تطبيقات الجوال',
            'ai': 'الذكاء الاصطناعي',
            'database': 'قواعد البيانات',
            'network': 'الشبكات',
            'security': 'أمن المعلومات'
        };
        return categories[category] || category;
    }
    
    function getStatusName(status) {
        const statuses = {
            'pending': 'قيد الانتظار',
            'accepted': 'مقبول',
            'rejected': 'مرفوض'
        };
        return statuses[status] || status;
    }
    
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('ar-EG', options);
    }
    
    // تحديث الإحصائيات في لوحة التحكم
    document.getElementById('myProjectsCount').textContent = projects.length;
    document.getElementById('receivedProposalsCount').textContent = proposals.length;
    document.getElementById('acceptedProposalsCount').textContent = proposals.filter(p => p.status === 'accepted').length;
    
    // عرض البيانات عند تحميل الصفحة
    displayTeacherProjects();
    displayTeacherProposals();
});