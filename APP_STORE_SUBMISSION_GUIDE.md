# Nine Star Ki App - App Store Submission Guide

**Status:** ✅ App is production-ready
**Last Updated:** November 2, 2025
**Target:** Apple App Store
**iOS Minimum Version:** 13.0+
**Estimated Review Time:** 24-48 hours

---

## Step-by-Step Submission Process

### Phase 1: Pre-Submission Preparation (1-2 hours)

#### 1.1 Update App Metadata

**File:** `app.json`

```json
{
  "expo": {
    "name": "Nine Star Ki",
    "slug": "nine-star-ki",
    "version": "1.0.0",  // Update version number
    "description": "Calculate your Nine Star Ki profile based on birth date. Discover your cosmic personality and destiny through ancient wisdom.",
    "privacy": "https://yourwebsite.com/privacy",
    "platforms": ["ios", "android"],
    "ios": {
      "bundleIdentifier": "com.ninestarki.mobile",
      "buildNumber": "1"
    }
  }
}
```

**Checklist:**
- [ ] Version number set (recommend 1.0.0 for first submission)
- [ ] App name is appropriate
- [ ] Description is clear and marketing-focused
- [ ] Bundle identifier matches Apple setup
- [ ] Build number incremented (1, 2, 3, etc.)

#### 1.2 Create Privacy Policy

**Required:** Privacy policy URL must be accessible online

**Template for Privacy Policy:**
```
# Privacy Policy for Nine Star Ki

Last Updated: [Date]

## Data Collection
- We do not collect personal data
- Birth dates are processed locally on your device only
- No data is sent to external servers
- No tracking or analytics enabled

## Permissions
- Calendar access: Optional, only if user grants permission
- No other app permissions required

## Contact
For privacy concerns, contact: [your-email]
```

**Hosting Options:**
- GitHub Pages (free)
- Vercel (free)
- Your personal website
- Notion (make public page)

#### 1.3 Prepare App Store Screenshots

**Requirements:**
- Minimum 2 screenshots, maximum 10
- Size: 1170 x 2532 pixels (iPhone 15 Plus / 6.7-inch)
- Format: JPEG or PNG
- Language: English (required for US release)

**Recommended Screenshots:**
1. Home screen with app title
2. Calculator screen with date selector
3. Results screen showing three stars
4. Educational screen overview
5. Dark mode version of calculator screen

**Screenshot Best Practices:**
- Include app name in screenshot
- Show key features in action
- Use High-contrast colors
- Include text overlays with descriptions
- All text must be readable

#### 1.4 Create App Icon

**Requirements:**
- Size: 1024 x 1024 pixels
- Format: PNG (with no transparency)
- No borders or rounded corners (iOS adds them)
- Test icon visibility at small sizes (27px, 58px, 80px)

**Icon Design Recommendations:**
- Use app's color scheme (blue accent)
- Include Chinese/East Asian design elements
- Simple, bold design works best
- Avoid thin lines that may disappear at small sizes

---

### Phase 2: Build Preparation (30 minutes)

#### 2.1 Install EAS CLI

```bash
npm install -g eas-cli
```

#### 2.2 Set Up EAS Account

```bash
eas login
# Follow prompts to create/login to Expo account
```

#### 2.3 Configure EAS Build

**Create `eas.json` in project root:**

```json
{
  "build": {
    "production": {
      "ios": {
        "image": "latest",
        "resourceClass": "m-medium"
      }
    }
  },
  "submit": {
    "production": {
      "ios": {
        "asciiProvider": "app-store-connect",
        "appleId": "your-apple-id@example.com",
        "asciiIssuerId": "[Your Team ID]",
        "asciiKeyId": "[Your Key ID]",
        "asciiKeyP8Path": "[Path to Private Key]"
      }
    }
  }
}
```

**Note:** You'll get Team ID and Key ID from Apple Developer account.

#### 2.4 Verify Build Settings

```bash
# Test local build first
npm run ios

# If successful, you're ready for EAS build
```

---

### Phase 3: Creating Apple Developer Account (1-2 hours)

#### 3.1 Enroll in Apple Developer Program

1. Visit: https://developer.apple.com/programs/
2. Click "Enroll"
3. Sign in with Apple ID (or create one)
4. Select "Individual" or "Company"
5. Pay $99 USD annual fee
6. Accept Apple Developer Agreement
7. Wait for account approval (usually instant)

#### 3.2 Create App ID

1. Go to: https://developer.apple.com/account/
2. Click "Certificates, IDs & Profiles"
3. Click "Identifiers"
4. Click "+" button
5. Select "App IDs"
6. Fill in:
   - **App Name:** Nine Star Ki
   - **Bundle ID:** com.ninestarki.mobile
   - **Capabilities:** None required
7. Click "Register"

#### 3.3 Create App Store Connect App

1. Visit: https://appstoreconnect.apple.com/
2. Click "My Apps"
3. Click "+" button
4. Select "New App"
5. Fill in:
   - **Platform:** iOS
   - **App Name:** Nine Star Ki
   - **Primary Language:** English
   - **Bundle ID:** com.ninestarki.mobile
   - **SKU:** nine-star-ki-1 (unique identifier)
   - **User Access:** Full Access
6. Click "Create"

#### 3.4 Complete App Store Connect Information

**In App Store Connect → Your App:**

##### Pricing and Availability
- [ ] Price: Free (or set price if desired)
- [ ] Availability: All countries
- [ ] Age Rating: 4+
- [ ] Content Rights: Check all boxes

##### App Information
- [ ] Category: Lifestyle
- [ ] Subtitle: "Calculate Your Cosmic Profile"
- [ ] Keywords: nine star ki, astrology, cosmic, personality, zodiac
- [ ] Privacy Policy URL: [Your privacy policy URL]

##### General App Information
- [ ] Support URL: [Your support website]
- [ ] Marketing URL: [Your website]

##### App Icon
- [ ] Upload 1024x1024 PNG icon

##### Screenshots
- [ ] Upload 2-5 screenshots (1170x2532)
- [ ] Write descriptions for each

##### App Preview
- [ ] Optional: Create 30-second app preview video

##### Description
```
Calculate your Nine Star Ki profile and discover your cosmic personality!

Nine Star Ki is an ancient system of personality and destiny analysis based on the year of your birth. Learn about your personality traits, strengths, and life direction.

Features:
• Enter your birth date to get your cosmic profile
• Three-star analysis system
• Learn about Nine Star Ki tradition
• Beautiful, modern interface
• Works in light and dark mode

Developed with authentic Nine Star Ki methodology.
```

##### Release Notes (for version 1.0.0)
```
First release of Nine Star Ki app!

Calculate your cosmic profile based on your birth date. Explore the ancient wisdom of Nine Star Ki with our beautiful, modern app.

Features:
- Birth date calculator
- Three-star profile analysis
- Educational information
- Dark mode support
```

---

### Phase 4: Building for App Store (20-30 minutes)

#### 4.1 Create App Store Build

```bash
# From project root
eas build --platform ios --auto-submit
```

**Or without auto-submit:**
```bash
eas build --platform ios
```

**This will:**
1. Build app using EAS servers
2. Compile for App Store (release mode)
3. Generate IPA file
4. Display build status in terminal

**Monitor build progress:**
```bash
eas build:list
# Shows all builds and their status
```

#### 4.2 Verify Build Success

Look for message like:
```
✅ Build finished
Artifacts:
- IPA: [URL to IPA file]
```

**Note down the Build ID** - you'll need it for next steps.

---

### Phase 5: App Store Submission (10-15 minutes)

#### 5.1 Submit Build to App Store

**Option A: Via EAS CLI (Automatic)**
```bash
eas submit --platform ios --latest
```

**Option B: Manual Submission via Xcode**
1. Download IPA from EAS
2. Open Xcode
3. Go to Window → Organizer
4. Select your build
5. Click "Distribute App"
6. Select "App Store Connect"
7. Select distribution method
8. Continue through prompts

#### 5.2 Complete App Store Review Information

**In App Store Connect:**

1. **Testing Information** (required)
   - Sign-in Required: No
   - Demo Account: N/A
   - Test Notes: "This app calculates Nine Star Ki profiles from birth dates. No login required. Test with any birth date between 1900-2024."

2. **Version Release Information**
   - Automatic Release: Check "Automatically release this version"
   - Or: Manual release after approval

3. **Encryption Information**
   - Encryption: "No"
   - Export Compliance: "No"

4. **Content Rights**
   - [ ] "The app does not use encryption"
   - [ ] "This version of the app does not contain ITAR encryption"

5. **Age Rating
   - [ ] Complete Age Rating Questionnaire
   - Recommended: 4+ (no objectionable content)

#### 5.3 Submit for Review

1. Click "Submit for Review"
2. Review all information
3. Click "Submit"
4. App enters "Waiting for Review" status

---

### Phase 6: App Store Review (24-48 hours)

#### 6.1 Possible Review Outcomes

**Approved ✅**
- App becomes available on App Store
- Appears in search results (may take a few hours)
- Automatic notifications about performance

**Rejected ❌**
- Receive email with rejection reason
- Common issues:
  - Privacy policy missing
  - Test account information incorrect
  - App crashes on test device
  - Missing required permissions documentation

**Fix and Resubmit:**
- Address rejection reason
- Increment build number
- Create new build with `eas build --platform ios`
- Resubmit

#### 6.2 After Approval

1. **App Available on App Store**
   - Appears in search results
   - Direct link: `apps.apple.com/app/nine-star-ki/[ID]`

2. **Monitor Performance**
   - Check App Store Connect Dashboard
   - Monitor crash rates
   - Review user ratings and reviews

3. **Update Strategy**
   - Plan regular updates (new features every 1-2 months)
   - Fix bugs immediately
   - Respond to user feedback

---

## Troubleshooting Common Issues

### Issue: "Build Failed"
**Solution:**
1. Check `.npmrc` has `legacy-peer-deps=true`
2. Run `npm install --legacy-peer-deps` locally
3. Verify no TypeScript errors: `npx tsc --noEmit`
4. Rebuild: `eas build --platform ios --clean`

### Issue: "App Rejected - Privacy Policy"
**Solution:**
1. Ensure privacy policy is publicly accessible
2. No password protection
3. Valid HTTPS URL
4. Privacy policy clearly addresses data collection

### Issue: "Build Not Found in App Store Connect"
**Solution:**
1. Wait 10-15 minutes for build to process
2. Refresh browser
3. Check build status with `eas build:list`

### Issue: "Cannot Sign In to App Store Connect"
**Solution:**
1. Verify Apple ID in EAS configuration
2. Check 2FA enabled on Apple account
3. Create app-specific password:
   - appleid.apple.com
   - Security
   - "Generate Password"
   - Use password in EAS config

### Issue: "App Crashes on Review"
**Solution:**
1. Test thoroughly on iOS simulator
2. Check for any console errors: `npm run ios`
3. Common crashes:
   - Missing image/asset files
   - Invalid date calculations
   - Memory leaks

---

## Checklist for Submission

### Pre-Submission (Complete Before Building)
- [ ] App tested on iOS simulator without crashes
- [ ] All design improvements verified working
- [ ] Dark mode tested and working
- [ ] Privacy policy written and hosted
- [ ] Apple Developer account created
- [ ] Apple Developer fee paid ($99)
- [ ] App created in App Store Connect
- [ ] Icon created (1024x1024 PNG)
- [ ] Screenshots created (5-10 images)
- [ ] App description written
- [ ] Keywords added to App Store Connect
- [ ] Age rating selected (4+ recommended)
- [ ] Test information provided

### Build Preparation
- [ ] `.npmrc` file created with `legacy-peer-deps=true`
- [ ] `eas.json` configured
- [ ] EAS CLI installed and logged in
- [ ] Bundle ID matches App Store Connect
- [ ] Version number updated in `app.json`
- [ ] Build number set correctly

### Submission
- [ ] Build created successfully via EAS
- [ ] App Store information complete
- [ ] Encryption information verified
- [ ] Content rights confirmed
- [ ] Age rating completed
- [ ] App submitted for review

### Post-Submission
- [ ] Monitor App Store Connect for review status
- [ ] Check email for approval/rejection
- [ ] If rejected: Address issues and resubmit
- [ ] Once approved: Monitor crash rates and ratings
- [ ] Plan first update (v1.0.1 or v1.1.0)

---

## Timeline Estimate

| Phase | Task | Duration |
|-------|------|----------|
| 1 | Pre-Submission Prep | 1-2 hours |
| 2 | Apple Dev Account | 1-2 hours |
| 3 | EAS Build Setup | 30 minutes |
| 4 | Create Build | 20-30 minutes |
| 5 | Submit to Store | 10 minutes |
| 6 | App Store Review | 24-48 hours |
| **Total** | **All Phases** | **27-85 hours** |

**Fast Track:** If you already have Apple Dev account → 2-4 hours before review

---

## Post-Launch Support

### Monitoring
- [ ] Set up crash monitoring
- [ ] Monitor app rating and reviews
- [ ] Track download metrics
- [ ] Check user feedback

### Future Updates
- [ ] Plan v1.1.0 with new features
- [ ] Regular bug fix releases (v1.0.1, v1.0.2, etc.)
- [ ] Test all updates thoroughly before submission
- [ ] Respond to user reviews

### Marketing
- [ ] Share app on social media
- [ ] Create landing page
- [ ] Reach out to Nine Star Ki community
- [ ] Consider paid ads if desired

---

## Helpful Resources

**Apple Developer:**
- Apple Developer Program: https://developer.apple.com/programs/
- App Store Connect: https://appstoreconnect.apple.com/
- App Store Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines/

**Expo & EAS:**
- EAS CLI Docs: https://docs.expo.dev/build/introduction/
- EAS Submit Docs: https://docs.expo.dev/submit/introduction/
- Expo App Config: https://docs.expo.dev/workflow/configuration/

**Nine Star Ki App Docs (This Project):**
- `DEPLOYMENT_SUMMARY.md` - What was improved
- `TESTING_CHECKLIST.md` - How to test before submission
- `DESIGN_AUDIT_REPORT.md` - Design details

---

## Contact & Support

For issues during submission:
1. Check Apple's App Review Guidelines (link above)
2. Review EAS documentation
3. Check project's `TESTING_CHECKLIST.md` for local verification
4. Verify all files in `.npmrc` and `eas.json`

---

**Good luck with your App Store submission!** 🚀

Your Nine Star Ki app is production-ready and meets all modern iOS design standards. The review process should be smooth with no major blockers expected.
