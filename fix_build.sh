#!/bin/bash

echo "Fixing Java version compatibility in gradle files..."

# Remplace VERSION_21 par VERSION_17 dans tous les .gradle dans android et node_modules/@capacitor/android
find ./android -type f -name "*.gradle" -exec sed -i 's/JavaVersion\.VERSION_21/JavaVersion.VERSION_17/g' {} +
find ./node_modules/@capacitor/android -type f -name "*.gradle" -exec sed -i 's/JavaVersion\.VERSION_21/JavaVersion.VERSION_17/g' {} +

echo "Fixed Java version in gradle files."

# Fix du AndroidManifest.xml
MANIFEST="./android/app/src/main/AndroidManifest.xml"
if [ -f "$MANIFEST" ]; then
    echo "Fixing foregroundServiceType attribute in AndroidManifest.xml"
    sed -i 's/foregroundServiceType="health"/foregroundServiceType="location"/g' "$MANIFEST"
    echo "ForegroundServiceType replaced with 'location'."
else
    echo "AndroidManifest.xml not found at $MANIFEST"
fi

echo "All done. Please try rebuilding your project."
