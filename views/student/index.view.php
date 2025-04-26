<?php require base_path('views/partials/head.php') ?>
<?php require base_path('views/partials/nav_s.php') ?>
<main class="content">
            <header class="content-header">
                <div class="user-info">
                    <span class="user-name">مرحباً، <span id="studentName"><?= $user['name']?></span></span>
                </div>
            </header>
            
            <!-- قسم لوحة التحكم الرئيسية -->
            <section id="dashboard" class="content-section active">
                <h2>لوحة التحكم</h2>
                <div class="dashboard-stats">
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-project-diagram"></i></div>
                        <div class="stat-info">
                            <h3>المشاريع المتاحة</h3>
                            <p id="availableProjectsCount"><?=$projects?></p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-tasks"></i></div>
                        <div class="stat-info">
                            <h3>مقترحاتي</h3>
                            <p id="myProposalsCount"><?= $proposals?></p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-check-circle"></i></div>
                        <div class="stat-info">
                            <h3>المقترحات المقبولة</h3>
                            <p id="acceptedProposalsCount"><?=$final_selection?></p>
                        </div>
                    </div>
                </div>
                <div class="recent-activity">
                    <h3>آخر التحديثات</h3>
                    <ul class="activity-list" id="activityList">
                        <li>
                            <div class="activity-icon"><i class="fas fa-check-circle"></i></div>
                            <div class="activity-details">
                                <p>تم قبول مقترحك للمشروع "تطبيق ويب لإدارة المكتبات"</p>
                                <span class="activity-time">منذ يومين</span>
                            </div>
                        </li>
                        <li>
                            <div class="activity-icon"><i class="fas fa-clock"></i></div>
                            <div class="activity-details">
                                <p>تم تقديم مقترح جديد للمشروع "تطوير نظام إدارة المحتوى"</p>
                                <span class="activity-time">منذ 3 أيام</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            
            <!-- قسم المشاريع المتاحة -->
            <section id="projects" class="content-section">
                <h2>المشاريع المتاحة</h2>
                <div class="search-filter">
                    <input type="text" id="projectSearch" placeholder="ابحث عن مشروع...">
                    <select id="projectFilter">
                        <option value="all">جميع المشاريع</option>
                        <option value="web">تطوير الويب</option>
                        <option value="mobile">تطبيقات الجوال</option>
                        <option value="ai">الذكاء الاصطناعي</option>
                    </select>
                </div>
                <div class="projects-list" id="projectsList">
                    <!-- ستتم إضافة المشاريع هنا بواسطة JavaScript -->
                </div>
            </section>
            
            <!-- قسم مقترحاتي -->
            <section id="proposals" class="content-section">
                <h2>مقترحاتي</h2>
                <div class="proposals-list" id="proposalsList">
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
                            <input type="text" id="profileFullName" name="profileFullName" value="أحمد محمد">
                        </div>
                        <div class="form-group">
                            <label for="profileStudentId">رقم التسجيل</label>
                            <input type="text" id="profileStudentId" name="profileStudentId" value="20210123" readonly>
                        </div>
                        <div class="form-group">
                            <label for="profileEmail">البريد الإلكتروني</label>
                            <input type="email" id="profileEmail" name="profileEmail" value="ahmed@example.com">
                        </div>
                        <div class="form-group">
                            <label for="profileUsername">اسم المستخدم</label>
                            <input type="text" id="profileUsername" name="profileUsername" value="ahmed_m" readonly>
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
    
    <!-- نافذة منبثقة لتقديم مقترح -->
    <div class="modal" id="proposalModal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>تقديم مقترح للمشروع</h2>
            <form id="proposalForm">
                <input type="hidden" id="projectId" name="projectId">
                <div class="form-group">
                    <label for="projectTitle">عنوان المشروع</label>
                    <input type="text" id="projectTitle" name="projectTitle" readonly>
                </div>
                <div class="form-group">
                    <label for="proposalMotivation">الدافع للمشاركة في هذا المشروع</label>
                    <textarea id="proposalMotivation" name="proposalMotivation" rows="4" required></textarea>
                </div>
                <div class="form-group">
                    <label for="proposalSkills">المهارات ذات الصلة</label>
                    <textarea id="proposalSkills" name="proposalSkills" rows="3" required></textarea>
                </div>
                <div class="form-group">
                    <button type="submit" class="submit-proposal-btn">تقديم المقترح</button>
                </div>
            </form>
        </div>
    </div>
    
    <script src="java/student-dashboard.js"></script>
</body>
</html>