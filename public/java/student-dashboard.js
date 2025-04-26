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
            window.location.href = this.href; // إعادة توجيه المستخدم إلى الصفحة الجديدة
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
            teacher: 'د. محمد أحمد',
            requirements: 'HTML, CSS, JavaScript, Node.js, MongoDB',
            maxStudents: 2,
            date: '2024-03-15'
        },
        {
            id: 2,
            title: 'تطبيق جوال للتعلم الإلكتروني',
            category: 'mobile',
            description: 'تطوير تطبيق للهواتف الذكية يوفر منصة للتعلم الإلكتروني مع دعم للدورات التفاعلية والاختبارات.',
            teacher: 'د. سارة محمود',
            requirements: 'React Native, Firebase',
            maxStudents: 2,
            date: '2024-03-18'
        },
        {
            id: 3,
            title: 'نظام توصية باستخدام الذكاء الاصطناعي',
            category: 'ai',
            description: 'تطوير نظام توصية ذكي يستخدم خوارزميات التعلم الآلي لتقديم توصيات مخصصة للمستخدمين.',
            teacher: 'د. أحمد خالد',
            requirements: 'Python, TensorFlow, Flask',
            maxStudents: 2,
            date: '2024-03-20'
        },
        {
            id: 4,
            title: 'تطوير نظام إدارة المحتوى',
            category: 'web',
            description: 'تصميم وتطوير نظام إدارة محتوى مخصص يتيح للمستخدمين إنشاء وتحرير ونشر المحتوى بسهولة.',
            teacher: 'د. محمد أحمد',
            requirements: 'PHP, MySQL, JavaScript, Bootstrap',
            maxStudents: 1,
            date: '2024-03-22'
        },
        {
            id: 5,
            title: 'تطبيق لإدارة المشاريع',
            category: 'web',
            description: 'تطوير تطبيق ويب لإدارة المشاريع يتيح للفرق تتبع المهام والمواعيد النهائية والتعاون.',
            teacher: 'د. ليلى عبد الله',
            requirements: 'React.js, Node.js, MongoDB',
            maxStudents: 2,
            date: '2024-03-25'
        }
    ];
    
    // بيانات المقترحات (محاكاة)
    const proposals = [
        {
            id: 1,
            projectId: 1,
            projectTitle: 'تطبيق ويب لإدارة المكتبات',
            motivation: 'لدي اهتمام كبير بتطوير تطبيقات الويب وأرغب في تطبيق معرفتي في مجال إدارة المكتبات.',
            skills: 'HTML, CSS, JavaScript, Node.js, Express, MongoDB',
            status: 'accepted',
            date: '2024-03-16'
        },
        {
            id: 2,
            projectId: 4,
            projectTitle: 'تطوير نظام إدارة المحتوى',
            motivation: 'أرغب في تعميق فهمي لأنظمة إدارة المحتوى وتطوير مهاراتي في PHP وقواعد البيانات.',
            skills: 'PHP, MySQL, JavaScript, HTML, CSS',
            status: 'pending',
            date: '2024-03-23'
        }
    ];
    
    // عرض المشاريع المتاحة
    function displayProjects() {
        const projectsList = document.getElementById('projectsList');
        projectsList.innerHTML = '';
        
        projects.forEach(project => {
            // التحقق مما إذا كان الطالب قد قدم بالفعل مقترحًا لهذا المشروع
            const hasProposal = proposals.some(proposal => proposal.projectId === project.id);
            
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <span class="project-category">${getCategoryName(project.category)}</span>
                <p class="project-description">${project.description}</p>
                <div class="project-details">
                    <p><strong>الأستاذ:</strong> ${project.teacher}</p>
                    <p><strong>المتطلبات:</strong> ${project.requirements}</p>
                    <p><strong>الحد الأقصى للطلاب:</strong> ${project.maxStudents}</p>
                    <p><strong>تاريخ النشر:</strong> ${formatDate(project.date)}</p>
                </div>
                <div class="project-actions">
                    ${hasProposal ? 
                        '<button class="submit-proposal-btn" disabled style="background-color: var(--gray-color);">تم تقديم مقترح</button>' : 
                        `<button class="submit-proposal-btn" data-project-id="${project.id}" data-project-title="${project.title}">تقديم مقترح</button>`
                    }
                </div>
            `;
            projectsList.appendChild(projectCard);
        });
        
        // إضافة مستمعي الأحداث لأزرار تقديم المقترحات
        const proposalButtons = document.querySelectorAll('.submit-proposal-btn:not([disabled])');
        proposalButtons.forEach(button => {
            button.addEventListener('click', function() {
                const projectId = this.getAttribute('data-project-id');
                const projectTitle = this.getAttribute('data-project-title');
                openProposalModal(projectId, projectTitle);
            });
        });
    }
    
    // عرض مقترحات الطالب
    function displayProposals() {
        const proposalsList = document.getElementById('proposalsList');
        proposalsList.innerHTML = '';
        
        if (proposals.length === 0) {
            proposalsList.innerHTML = '<p>لم تقم بتقديم أي مقترحات بعد.</p>';
            return;
        }
        
        proposals.forEach(proposal => {
            const proposalCard = document.createElement('div');
            proposalCard.className = 'proposal-card';
            proposalCard.innerHTML = `
                <div class="proposal-header">
                    <h3>${proposal.projectTitle}</h3>
                    <span class="proposal-status status-${proposal.status}">${getStatusName(proposal.status)}</span>
                </div>
                <div class="proposal-details">
                    <div class="detail-group">
                        <label>الدافع:</label>
                        <p>${proposal.motivation}</p>
                    </div>
                    <div class="detail-group">
                        <label>المهارات:</label>
                        <p>${proposal.skills}</p>
                    </div>
                    <div class="detail-group">
                        <label>تاريخ التقديم:</label>
                        <p>${formatDate(proposal.date)}</p>
                    </div>
                </div>
                ${proposal.status === 'accepted' ? 
                    '<div class="proposal-actions"><button class="accept-btn">اختيار هذا المشروع</button></div>' : 
                    ''
                }
            `;
            proposalsList.appendChild(proposalCard);
        });
        
        // تحديث عدد المقترحات في لوحة التحكم
    }
    
    // فتح النافذة المنبثقة لتقديم مقترح
    function openProposalModal(projectId, projectTitle) {
        const modal = document.getElementById('proposalModal');
        const projectIdInput = document.getElementById('projectId');
        const projectTitleInput = document.getElementById('projectTitle');
        
        projectIdInput.value = projectId;
        projectTitleInput.value = projectTitle;
        
        modal.style.display = 'flex';
    }
    
    // إغلاق النافذة المنبثقة
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });
    
    // معالجة تقديم المقترح
    const proposalForm = document.getElementById('proposalForm');
    proposalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const projectId = parseInt(document.getElementById('projectId').value);
        const projectTitle = document.getElementById('projectTitle').value;
        const motivation = document.getElementById('proposalMotivation').value;
        const skills = document.getElementById('proposalSkills').value;
        
        // التحقق من عدد المقترحات المقدمة (الحد الأقصى 3)
        if (proposals.length >= 3) {
            alert('لقد وصلت إلى الحد الأقصى من المقترحات (3). يرجى إلغاء مقترح موجود قبل تقديم مقترح جديد.');
            document.getElementById('proposalModal').style.display = 'none';
            return;
        }
        
        // إضافة المقترح الجديد
        const newProposal = {
            id: proposals.length + 1,
            projectId: projectId,
            projectTitle: projectTitle,
            motivation: motivation,
            skills: skills,
            status: 'pending',
            date: new Date().toISOString().split('T')[0]
        };
        
        proposals.push(newProposal);
        
        // تحديث واجهة المستخدم
        displayProjects();
        displayProposals();
        
        // إغلاق النافذة المنبثقة وإعادة تعيين النموذج
        document.getElementById('proposalModal').style.display = 'none';
        proposalForm.reset();
        
        alert('تم تقديم المقترح بنجاح!');
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
        
        alert('تم تحديث بياناتك بنجاح!');
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
    
    // البحث في المشاريع
    document.getElementById('projectSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const projectFilter = document.getElementById('projectFilter').value;
        
        const filteredProjects = projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm) || 
                                 project.description.toLowerCase().includes(searchTerm);
            const matchesFilter = projectFilter === 'all' || project.category === projectFilter;
            
            return matchesSearch && matchesFilter;
        });
        
        displayFilteredProjects(filteredProjects);
    });
    
    document.getElementById('projectFilter').addEventListener('change', function() {
        const searchTerm = document.getElementById('projectSearch').value.toLowerCase();
        const projectFilter = this.value;
        
        const filteredProjects = projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm) || 
                                 project.description.toLowerCase().includes(searchTerm);
            const matchesFilter = projectFilter === 'all' || project.category === projectFilter;
            
            return matchesSearch && matchesFilter;
        });
        
        displayFilteredProjects(filteredProjects);
    });
    
    function displayFilteredProjects(filteredProjects) {
        const projectsList = document.getElementById('projectsList');
        projectsList.innerHTML = '';
        
        if (filteredProjects.length === 0) {
            projectsList.innerHTML = '<p>لا توجد مشاريع تطابق معايير البحث.</p>';
            return;
        }
        
        filteredProjects.forEach(project => {
            // التحقق مما إذا كان الطالب قد قدم بالفعل مقترحًا لهذا المشروع
            const hasProposal = proposals.some(proposal => proposal.projectId === project.id);
            
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <span class="project-category">${getCategoryName(project.category)}</span>
                <p class="project-description">${project.description}</p>
                <div class="project-details">
                    <p><strong>الأستاذ:</strong> ${project.teacher}</p>
                    <p><strong>المتطلبات:</strong> ${project.requirements}</p>
                    <p><strong>الحد الأقصى للطلاب:</strong> ${project.maxStudents}</p>
                    <p><strong>تاريخ النشر:</strong> ${formatDate(project.date)}</p>
                </div>
                <div class="project-actions">
                    ${hasProposal ? 
                        '<button class="submit-proposal-btn" disabled style="background-color: var(--gray-color);">تم تقديم مقترح</button>' : 
                        `<button class="submit-proposal-btn" data-project-id="${project.id}" data-project-title="${project.title}">تقديم مقترح</button>`
                    }
                </div>
            `;
            projectsList.appendChild(projectCard);
        });
        
        // إضافة مستمعي الأحداث لأزرار تقديم المقترحات
        const proposalButtons = document.querySelectorAll('.submit-proposal-btn:not([disabled])');
        proposalButtons.forEach(button => {
            button.addEventListener('click', function() {
                const projectId = this.getAttribute('data-project-id');
                const projectTitle = this.getAttribute('data-project-title');
                openProposalModal(projectId, projectTitle);
            });
        });
    }
    
    // تحديث عدد المشاريع المتاحة في لوحة التحكم
    
    // عرض البيانات عند تحميل الصفحة

    displayProjects();
    displayProposals();
});