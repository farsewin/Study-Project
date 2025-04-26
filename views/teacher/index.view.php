<?php require base_path('views/partials/head.php') ?>
<?php require base_path('views/partials/nav.php') ?>


<main class="content">
            <header class="content-header">
                <div class="user-info">
                    <span class="user-name">مرحباً، د. <span id="teacherName">محمد أحمد</span></span>
                </div>
            </header>
            
            <!-- قسم لوحة التحكم الرئيسية -->
            <section id="dashboard" class="content-section active">
                <h2>لوحة التحكم</h2>
                <div class="dashboard-stats">
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-project-diagram"></i></div>
                        <div class="stat-info">
                            <h3>مشاريعي</h3>
                            <p id="myProjectsCount">5</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-tasks"></i></div>
                        <div class="stat-info">
                            <h3>المقترحات المقدمة</h3>
                            <p id="receivedProposalsCount">12</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-check-circle"></i></div>
                        <div class="stat-info">
                            <h3>المقترحات المقبولة</h3>
                            <p id="acceptedProposalsCount">4</p>
                        </div>
                    </div>
                </div>
                <div class="recent-activity">
                    <h3>آخر التحديثات</h3>
                    <ul class="activity-list" id="activityList">
                        <li>
                            <div class="activity-icon"><i class="fas fa-user"></i></div>
                            <div class="activity-details">
                                <p>قدم الطالب "أحمد محمد" مقترحاً لمشروع "تطبيق ويب لإدارة المكتبات"</p>
                                <span class="activity-time">منذ يوم واحد</span>
                            </div>
                        </li>
                        <li>
                            <div class="activity-icon"><i class="fas fa-plus-circle"></i></div>
                            <div class="activity-details">
                                <p>تمت إضافة مشروع جديد "تطوير نظام إدارة المحتوى"</p>
                                <span class="activity-time">منذ 3 أيام</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            
            <!-- قسم مشاريعي -->
            <section id="my-projects" class="content-section">
                <h2>مشاريعي</h2>
                <div class="search-filter">
                    <input type="text" id="projectSearch" placeholder="ابحث عن مشروع...">
                </div>
                <div class="projects-list" id="teacherProjectsList">
                    <!-- ستتم إضافة المشاريع هنا بواسطة JavaScript -->
                </div>
            </section>
            
            <!-- قسم إضافة مشروع -->
            <section id="add-project" class="content-section">
                <h2>إضافة مشروع جديد</h2>
                <div class="add-project-form">
                    <form id="addProjectForm">
                        <div class="form-group">
                            <label for="projectTitle">عنوان المشروع</label>
                            <input type="text" id="projectTitle" name="projectTitle" required>
                        </div>
                        <div class="form-group">
                            <label for="projectDescription">وصف المشروع</label>
                            <textarea id="projectDescription" name="projectDescription" rows="4" required></textarea>
                        </div>
                        <div class="form-group">
                            <label for="projectCategory">تصنيف المشروع</label>
                            <select id="projectCategory" name="projectCategory" required>
                                <option value="">اختر تصنيفاً</option>
                                <option value="web">تطوير الويب</option>
                                <option value="mobile">تطبيقات الجوال</option>
                                <option value="ai">الذكاء الاصطناعي</option>
                                <option value="database">قواعد البيانات</option>
                                <option value="network">الشبكات</option>
                                <option value="security">أمن المعلومات</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="projectRequirements">متطلبات المشروع</label>
                            <textarea id="projectRequirements" name="projectRequirements" rows="3" required></textarea>
                        </div>
                        <div class="form-group">
                            <label for="projectMaxStudents">الحد الأقصى للطلاب</label>
                            <input type="number" id="projectMaxStudents" name="projectMaxStudents" min="1" max="2" value="2" required>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="add-project-btn">إضافة المشروع</button>
                        </div>
                    </form>
                </div>
            </section>
            
            <!-- قسم مقترحات الطلاب -->
            <section id="proposals" class="content-section">
                <h2>مقترحات الطلاب</h2>
                <div class="search-filter">
                    <input type="text" id="proposalSearch" placeholder="ابحث عن مقترح...">
                    <select id="proposalFilter">
                        <option value="all">جميع المقترحات</option>
                        <option value="pending">قيد الانتظار</option>
                        <option value="accepted">مقبولة</option>
                        <option value="rejected">مرفوضة</option>
                    </select>
                </div>
                <div class="proposals-list" id="teacherProposalsList">
                    <!-- ستتم إضافة المقترحات هنا بواسطة JavaScript -->
                </div>
            </section>
            
            <!-- قسم الملف الشخصي -->
            <section id="profile" class="content-section">
                <h2>الملف الشخصي</h2>
                <div class="profile-form">
                    <form id="profileForm">
                        <div class="form-group">
                            <label for="profileFullName">الاسم الكامل</label>
                            <input type="text" id="profileFullName" name="profileFullName" value="د. محمد أحمد">
                        </div>
                        <div class="form-group">
                            <label for="profileDepartment">القسم</label>
                            <input type="text" id="profileDepartment" name="profileDepartment" value="علوم الحاسب" readonly>
                        </div>
                        <div class="form-group">
                            <label for="profileEmail">البريد الإلكتروني</label>
                            <input type="email" id="profileEmail" name="profileEmail" value="mohamed@example.com">
                        </div>
                        <div class="form-group">
                            <label for="profileUsername">اسم المستخدم</label>
                            <input type="text" id="profileUsername" name="profileUsername" value="mohamed_a" readonly>
                        </div>
                        <div class="form-group">
                            <label for="profilePassword">كلمة المرور الجديدة</label>
                            <input type="password" id="profilePassword" name="profilePassword">
                        </div>
                        <div class="form-group">
                            <label for="profileConfirmPassword">تأكيد كلمة المرور</label>
                            <input type="password" id="profileConfirmPassword" name="profileConfirmPassword">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="update-profile-btn">تحديث البيانات</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    </div>
    
    <!-- نافذة منبثقة لعرض تفاصيل المقترح -->
    <div class="modal" id="viewProposalModal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>تفاصيل المقترح</h2>
            <div class="proposal-details">
                <div class="detail-group">
                    <label>عنوان المشروع:</label>
                    <p id="modalProjectTitle"></p>
                </div>
                <div class="detail-group">
                    <label>اسم الطالب:</label>
                    <p id="modalStudentName"></p>
                </div>
                <div class="detail-group">
                    <label>الدافع للمشاركة:</label>
                    <p id="modalMotivation"></p>
                </div>
                <div class="detail-group">
                    <label>المهارات ذات الصلة:</label>
                    <p id="modalSkills"></p>
                </div>
                <div class="detail-group">
                    <label>تاريخ التقديم:</label>
                    <p id="modalSubmissionDate"></p>
                </div>
                <div class="proposal-actions" id="proposalActions">
                    <button class="accept-btn" id="acceptProposal">قبول المقترح</button>
                    <button class="reject-btn" id="rejectProposal">رفض المقترح</button>
                </div>
            </div>
        </div>
    </div>

    <script src="java/teacher-dashboard.js"></script>
</body>
</html>

