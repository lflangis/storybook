echo "Installing storybook"
cd ..
npx install storybook
clear
echo "Init storybook"
npx storybook init
echo "Copying storybook's configuration file"
cp -R storybook/.storybook .
echo "Setup completed"
exit
