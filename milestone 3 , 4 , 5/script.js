var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var form = document.getElementById("resumeForm");
var resumePage = document.getElementById("resumePage");
var resumePhoto = document.getElementById("resumePhoto");
var resumeName = document.getElementById("resumeName");
var resumeEmail = document.getElementById("resumeEmail");
var resumePhone = document.getElementById("resumePhone");
var resumeEducation = document.getElementById("resumeEducation");
var resumeWorkExperience = document.getElementById("resumeWorkExperience");
var resumeSkills = document.getElementById("resumeSkills");
var downloadPdfButton = document.getElementById('download-Pdf');
var backButton = document.getElementById("backButton");
var editButton = document.getElementById("editButton");
var resumeContent = document.getElementById("resumeContent");
var shareLinkButton = document.getElementById("shareLinkButton");
var photoInput = document.getElementById("photoInput");
form.addEventListener("submit", function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name1, email, phone, degree, education, workExperience, skills, photoInput, photoFile, photoBase64, queryParams, uniqueUrl;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                event.preventDefault();
                name1 = document.getElementById("name").value;
                email = document.getElementById("email").value;
                phone = document.getElementById("phone").value;
                degree = document.getElementById("degree").value;
                education = document.getElementById("education").value;
                workExperience = document.getElementById("workExperience").value;
                skills = document.getElementById("skills").value;
                photoInput = document.getElementById("photoInput");
                photoFile = photoInput.files && photoInput.files.length > 0 ?
                    photoInput.files[0] : null;
                photoBase64 = '';
                if (!photoFile) return [3 /*break*/, 2];
                return [4 /*yield*/, fileToBase64(photoFile)];
            case 1:
                photoBase64 = _b.sent();
                localStorage.getItem("resumePhoto");
                resumePhoto.src = photoBase64;
                console.log(photoBase64);
                _b.label = 2;
            case 2:
                (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
                resumePage.classList.remove("hidden");
                resumeName.textContent = name1;
                resumeEmail.textContent = "email : ".concat(email);
                resumePhone.textContent = "phone : ".concat(phone);
                resumeEducation.textContent = "".concat(degree, " from ").concat(education);
                resumeWorkExperience.textContent = workExperience;
                resumeSkills.textContent = skills;
                queryParams = new URLSearchParams({
                    name: name1,
                    email: email,
                    phone: phone,
                    degree: degree,
                    education: education,
                    workexperience: workExperience,
                    skills: skills,
                });
                uniqueUrl = "".concat(window.location.origin, "? ").concat(queryParams.toString());
                shareLinkButton.addEventListener("click", function () {
                    navigator.clipboard.writeText(uniqueUrl);
                    alert("the link is copied");
                });
                window.history.replaceState(null, '', "".concat(queryParams.toString()));
                return [2 /*return*/];
        }
    });
}); });
function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () { return resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
editButton.addEventListener("click", function () {
    var _a;
    updateformfromresume();
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    resumePage.classList.add("hidden");
});
function updateformfromresume() {
    var _a;
    var _b = ((_a = resumeEducation.textContent) === null || _a === void 0 ? void 0 : _a.split("from")) || '', degree = _b[0], education = _b[1];
    document.getElementById("name").value = resumeName.textContent || '';
    document.getElementById("email").value = resumeEmail.textContent || '';
    document.getElementById("phone").value = resumePhone.textContent || '';
    document.getElementById("degree").value = degree || '';
    document.getElementById("education").value = education || '';
    document.getElementById("workExperience").value = resumeWorkExperience.textContent || '';
    document.getElementById("skills").value = resumeSkills.textContent || '';
}
downloadPdfButton.addEventListener("click", function () {
    if (typeof html2pdf === 'undefined') {
        alert('Error : html2pdf library is not loaded');
        return;
    }
    var resumeOptions = {
        margin: 0.5,
        filename: 'resum.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf()
        .from(resumeContent)
        .set(resumeOptions)
        .save()
        .catch(function (error) {
        console.error('PDF error', error);
        console.log(html2pdf);
    });
});
window.addEventListener('DOMContentLoaded', function () {
    var params = new URLSearchParams(window.location.search);
    var name = params.get("name") || '';
    var email = params.get("Email") || '';
    var phone = params.get("phone") || '';
    var degree = params.get("degree") || '';
    var education = params.get("education") || '';
    var workExperience = params.get("workExperience") || '';
    var skills = params.get('skills') || '';
    if (name || email || phone || degree || education || workExperience || skills) {
        resumeName.textContent = name;
        resumeEmail.textContent = "email : ".concat(email);
        resumePhone.textContent = "phone : ".concat(phone);
        resumeEducation.textContent = "".concat(degree, " from ").concat(education);
        resumeWorkExperience.textContent = workExperience;
        resumeSkills.textContent = skills;
        var savephoto = localStorage.getItem("resumePhoto");
        if (savephoto) {
            resumePhoto.src = savephoto;
        }
    }
});
resumePhoto.onload = function () {
    resumePhoto.style.width = "150px";
    resumePhoto.style.height = "150px";
    resumePhoto.style.objectFit = "cover";
    resumePhoto.style.borderRadius = "50%";
    resumePhoto.style.display = "block";
    resumePhoto.style.margin = "0 auto";
};
